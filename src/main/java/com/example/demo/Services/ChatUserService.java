package com.example.demo.Services;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.ChatUserEntity;
import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.ChatUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatUserService {
    private final ChatUserRepository chatUserRepository;
    private final UserService userService;
    private final ChatService chatService;

    public ChatUserEntity create(int user_id, int chat_id){
        ChatUserEntity chat_user = new ChatUserEntity();
        chat_user.setUser(userService.findById(user_id));
        chat_user.setChat(chatService.findById(chat_id));

        return chatUserRepository.save(chat_user);
    }

    public ChatUserEntity create(UserEntity user, ChatEntity chat){
        ChatUserEntity chat_user = new ChatUserEntity();
        chat_user.setChat(chat);
        chat_user.setUser(user);

        return chatUserRepository.save(chat_user);
    }

    public void createChat(UserEntity user1, UserEntity user2){
        ChatEntity chat = chatService.createChat();
        System.out.println("new chat  " + chat.getId());
        create(user1, chat);
        create(user2, chat);
    }

    public List<ChatEntity> getChatsByUser(int id){
        UserEntity user = userService.findById(id);
        List<ChatUserEntity> list = chatUserRepository.getByUser(user);

        return chatService.findByList(list);
    }
}
