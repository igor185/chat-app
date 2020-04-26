package com.example.demo.Seeds;

import com.example.demo.Entities.MessageEntity;
import com.example.demo.Services.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.util.List;

@Component
@RequiredArgsConstructor
public class MessageSeed {
    private final EntityManager entityManager;
    private final MessageService messageService;
    private final ChatService chatService;
    private final DatabaseUserService userService;

    public void seed(){
        List<MessageEntity> messages = entityManager.createQuery("SELECT u FROM MessageEntity u")
                .getResultList();

        if(messages.size() > 0){
            return;
        }

        MessageEntity m1 = messageService.create(
                chatService.findById(1),
                userService.findById(1),
                "First message from seed"
        );

        MessageEntity m3 = messageService.create(
                chatService.findById(1),
                userService.findById(2),
                "3 message from seed"
        );

        MessageEntity m2 = messageService.create(
                chatService.findById(4),
                userService.findById(1),
                "Second message from seed"
        );
//
        System.out.println(m1);
        System.out.println(m2);
        System.out.println(m3);

//        messages = entityManager.createQuery("SELECT u FROM MessageEntity u")
//                .getResultList();
//        for(MessageEntity message: messages){
//            System.out.println(message.getMessage());
//        }
    }
}
