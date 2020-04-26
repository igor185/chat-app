package com.example.demo.Controller;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import com.example.demo.Models.ChatListResponseModel;
import com.example.demo.Models.NewMessageDTO;
import com.example.demo.Services.*;
import com.example.demo.security.model.UserContext;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChatController {
    private final ChatUserService chatUserService;
    private final MessageService messageService;
    private final ChatService chatService;

    @Autowired
    private final DatabaseUserService userService;


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

    @MessageMapping("/new-message")
    @SendTo("/res/new-message")
    public MessageEntity sendMessage(NewMessageDTO newMessageDTO){
        ChatEntity chatEntity = chatService.findById(newMessageDTO.getChatId());
        User userEntity = userService.findById(newMessageDTO.getUserId());
        MessageEntity message = messageService.create(chatEntity, userEntity, newMessageDTO.getMessage());
        return message;
    }
}
