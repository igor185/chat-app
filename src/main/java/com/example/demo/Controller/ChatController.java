package com.example.demo.Controller;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import com.example.demo.Models.ChatListResponseModel;
import com.example.demo.Models.NewChatDTO;
import com.example.demo.Models.NewMessageDTO;
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

import java.security.Principal;
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
    public String getMessages(@PathVariable final Integer id) throws JsonProcessingException {
        List<MessageEntity> list = chatService.getMessages(id);

        ObjectMapper mapper = new ObjectMapper();
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
//    @SendTo("/res/new-message")
    public void sendMessage(NewMessageDTO newMessageDTO) throws JsonProcessingException {
        System.out.println(newMessageDTO);
        ChatEntity chatEntity = chatService.createChat(newMessageDTO.getChatId());
        User userEntity = userService.findById(newMessageDTO.getUserId());
        System.out.println(chatEntity);
        System.out.println(userEntity);
        User userGetMessage = chatUserService.getUserByChatAndNotUser(chatEntity, userEntity);
        MessageEntity message = messageService.create(chatEntity, userEntity, newMessageDTO.getMessage());

        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(message);

        simpMessagingTemplate.convertAndSend("/res/new-message/"+userEntity.getId(), res);
        simpMessagingTemplate.convertAndSend("/res/new-message/"+userGetMessage.getId(), res);
    }
}
