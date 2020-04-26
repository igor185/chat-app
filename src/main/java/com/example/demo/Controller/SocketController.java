package com.example.demo.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Component;

@Component
public class SocketController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public String simple() {
        return "Hi";
    }


}
