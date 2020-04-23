package com.example.demo.Controller;

import com.example.demo.Entities.MessageEntity;
import com.example.demo.Models.ChatListResponseModel;
import com.example.demo.Services.ChatService;
import com.example.demo.Services.ChatUserService;
import com.example.demo.Services.MessageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {
    private final ChatUserService chatUserService;
    private final MessageService messageService;
    private final ChatService chatService;


    @RequestMapping(value = "/chats")
    @ResponseBody
    public String getChatList() throws JsonProcessingException {
        int id = 1;

        List<ChatListResponseModel> chats = chatUserService.getChatListByUser(id);

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(chats);
        return json;
    }

    @RequestMapping(value = "/chat/{id}")
    @ResponseBody
    public String getMessages(@PathVariable final Integer id) throws JsonProcessingException {
        List<MessageEntity> list = chatService.getMessages(id);

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(list);
        return json;
    }
}
