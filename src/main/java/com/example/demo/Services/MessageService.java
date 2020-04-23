package com.example.demo.Services;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageEntity create(ChatEntity chat, UserEntity user, String text){
        MessageEntity message = new MessageEntity();
        message.setChat(chat);
        message.setUser(user);
        message.setMessage(text);
        return messageRepository.save(message);
    }

    public List<MessageEntity> getLastInChat(List<ChatEntity> chats){
        MessageEntity list[] = new MessageEntity[chats.size()];
        for(int i = 0; i < chats.size(); i++){
            MessageEntity message = messageRepository.lastInChat(chats.get(i));
            list[i] = message;
        }

        return Arrays.asList(list);
    }

    public MessageEntity getLastInChat(ChatEntity chat){
        return messageRepository.lastInChat(chat);
    }

    public List<MessageEntity> findAllByChat(ChatEntity chat){
        return messageRepository.findAllByChat(chat);
    }
}
