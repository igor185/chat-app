package com.example.demo.Controller;

import com.example.demo.Models.NewTypingDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/new-typing")
    public void newTyping(NewTypingDTO newTypingDTO) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(newTypingDTO);


        simpMessagingTemplate.convertAndSend("/res/new-typing/"+newTypingDTO.getUserId(), json);
    }
}
