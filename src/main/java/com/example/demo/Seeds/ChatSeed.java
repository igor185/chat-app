package com.example.demo.Seeds;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.User;
import com.example.demo.Services.ChatService;
import com.example.demo.Services.ChatUserService;
import com.example.demo.Services.DatabaseUserService;
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
    private final DatabaseUserService userService;
    private final ChatUserService chatUserService;

    @Transactional
    public void seed(){
        List<User> users = (List<User>) entityManager.createQuery("SELECT u FROM User u").getResultList();


        for(int i = 0; i < users.size(); i++){
            Long id1  = users.get(i).getId();
            Long id2  = users.get((i + 1) % users.size()).getId();
            chatUserService.createChat(
                    userService.findById(id1),
                    userService.findById(id2)
            );
        }
    }
}
