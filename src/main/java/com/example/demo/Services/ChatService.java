package com.example.demo.Services;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.ChatUserEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;

    @Autowired
    private final MessageService messageService;


    public ChatEntity createChat(int id){
        ChatEntity chat = new ChatEntity();
        chat.setId(id);
        return chatRepository.save(chat);
    }

    public ChatEntity findById(Integer id){
        return chatRepository.findByIdEntity(id);
    }


    public List<ChatEntity> findByList(List<ChatUserEntity> chats){
        List<Integer> list = new ArrayList<>();
        for(ChatUserEntity chat: chats){
            list.add(chat.getChat().getId());
        }
        return chatRepository.findAllById(list);
    }

    public List<MessageEntity> getMessages(Integer id){
        ChatEntity chat = findById(id);

        return messageService.findAllByChat(chat);
    }

    public ChatEntity save(ChatEntity chat){
        return chatRepository.save(chat);
    }
}
