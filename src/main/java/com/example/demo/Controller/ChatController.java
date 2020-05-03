package com.example.demo.Controller;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import com.example.demo.Models.ChatListResponseModel;
import com.example.demo.Models.NewChatDTO;
import com.example.demo.Models.NewMessageDTO;
import com.example.demo.Models.ReadMessageDTO;
import com.example.demo.Services.*;
import com.example.demo.security.model.UserContext;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.lambdaexpression.annotation.EnableRequestBodyParam;
import com.github.lambdaexpression.annotation.RequestBodyParam;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@EnableRequestBodyParam
public class ChatController {
    private final ChatUserService chatUserService;
    private final MessageService messageService;
    private final ChatService chatService;

    @Autowired
    private final DatabaseUserService userService;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private NotificationService notificationService;

    @RequestMapping(value = "/api/chats")
    @ResponseBody
    public String getChatList(Authentication auth) throws JsonProcessingException {
        List<ChatListResponseModel> chats = chatUserService.getChatListByUserName(
                ((UserContext)auth.getPrincipal()).getUsername()
        );

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(chats);
        return json;
    }

    @RequestMapping(value = "/api/chat/{id}")
    @ResponseBody
    public String getMessages(@PathVariable final Integer id, Authentication auth) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        List<MessageEntity> list = chatService.getMessages(id);
        User u = userService.getByUsername(((UserContext)auth.getPrincipal()).getUsername()).get();
        ChatEntity chatEntity = chatService.findById(id);

        if(chatEntity.getCount() != null
                && chatEntity.getCount() != 0
                && chatEntity.getUserId() != u.getId())
        {
            String json = mapper.writeValueAsString(chatEntity.getId());
            simpMessagingTemplate.convertAndSend("/res/chat-read/"+chatEntity.getUserId(), json);
            chatEntity.setCount(0);
            chatEntity.setUserId(null);
            chatService.save(chatEntity);
        }
        String json = mapper.writeValueAsString(list);
        return json;
    }

    @RequestMapping(value = "/api/chat")
    @ResponseBody
    @SendTo("/res/new-chat")
    public String newChat(Authentication auth, @RequestBodyParam Integer userId) throws JsonProcessingException {
        User u1 = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        User u2 = userService.findById(userId);
        ObjectMapper mapper = new ObjectMapper();
        NewChatDTO res =  new NewChatDTO(
                chatUserService.createChat(u1, u2).getId(),
                u1,
                u2
        );
        System.out.println(u1.getId());
        System.out.println(u2.getId());
        String json = mapper.writeValueAsString(res);
        simpMessagingTemplate.convertAndSend("/res/new-chat/"+u1.getId(), json);
        simpMessagingTemplate.convertAndSend("/res/new-chat/"+u2.getId(), json);
        return mapper.writeValueAsString(res);
    }

    @MessageMapping("/new-message")
    public void sendMessage(NewMessageDTO newMessageDTO) throws IOException {
        ChatEntity chatEntity = chatService.findById(newMessageDTO.getChatId());
        User userEntity = userService.findById(newMessageDTO.getUserId());
        User userGetMessage = chatUserService.getUserByChatAndNotUser(chatEntity, userEntity);
        MessageEntity message = messageService.create(chatEntity, userEntity, newMessageDTO.getMessage(), newMessageDTO.getFile());

        System.out.println(chatEntity);
        // update count
        if(chatEntity.getUserId() == null){
            System.out.println("set 1");
            chatEntity.setCount(1);
            chatEntity.setUserId(userEntity.getId());
        }else {
            System.out.println("set more");
            chatEntity.setCount(chatEntity.getCount() + 1);
        }

        chatEntity = chatService.save(chatEntity);
        System.out.println(chatEntity.getUserId());
        System.out.println(chatEntity);


        // send socket new message
        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(message);

        simpMessagingTemplate.convertAndSend("/res/new-message/"+userEntity.getId(), res);
        simpMessagingTemplate.convertAndSend("/res/new-message/"+userGetMessage.getId(), res);


        // send email
        notificationService.sendNotificationAboutMessage(userEntity, userGetMessage, message);
    }

    @RequestMapping(value = "/api/message/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteMessage(@PathVariable int id, Authentication auth, @RequestBodyParam Integer chatId) throws JsonProcessingException {
        System.out.println(id);
        System.out.println(chatId);
        User userDelete = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        ChatEntity chat = chatService.findById(chatId);
        User userAnother = chatUserService.getUserByChatAndNotUser(chat, userDelete);

        chatService.decreaseCount(chat);

        MessageEntity message = messageService.deleteMessage(id);



        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(message);
        System.out.println(res);

        simpMessagingTemplate.convertAndSend("/res/delete-message/"+userDelete.getId(), res);
        simpMessagingTemplate.convertAndSend("/res/delete-message/"+userAnother.getId(), res);

        return res;
    }

    @RequestMapping(value = "/api/message/{id}", method = RequestMethod.POST)
    @ResponseBody
    public String editMessage(@PathVariable int id, Authentication auth, @RequestBodyParam Integer chatId, @RequestBodyParam String message) throws JsonProcessingException {
        User userDelete = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        ChatEntity chat = chatService.findById(chatId);
        User userAnother = chatUserService.getUserByChatAndNotUser(chat, userDelete);
        MessageEntity editedMessage = messageService.updateMessage(id, message);

        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(editedMessage);
        simpMessagingTemplate.convertAndSend("/res/edit-message/"+userDelete.getId(), res);
        simpMessagingTemplate.convertAndSend("/res/edit-message/"+userAnother.getId(), res);

        return res;
    }

    @MessageMapping("/message-read")
    public void readMessage(ReadMessageDTO readMessageDTO) throws JsonProcessingException {
        chatService.setRead(readMessageDTO.getChatId());

        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(readMessageDTO.getChatId());
        simpMessagingTemplate.convertAndSend("/res/chat-read/"+readMessageDTO.getUserId(), res);
    }
}
