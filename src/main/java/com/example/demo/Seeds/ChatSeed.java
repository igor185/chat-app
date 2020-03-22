package com.example.demo.Seeds;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.ChatRepository;
import com.example.demo.Services.ChatService;
import com.example.demo.Services.ChatUserService;
import com.example.demo.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ChatSeed {
    private final EntityManager entityManager;
    private final ChatService chatService;
    private final UserService userService;
    private final ChatUserService chatUserService;

    @Transactional
    public void seed(){
        List<ChatEntity> chats = entityManager.createQuery("SELECT u FROM ChatEntity u")
                .getResultList();

        if(chats.size() != 0){
            System.out.println("no chat seed");
            return;
        }

        System.out.println("chat seed");


        chatUserService.createChat(
                userService.findById(1),
                userService.findById(2)
        );

        chatUserService.createChat(
                userService.findById(1),
                userService.findById(3)
        );

    }
}
