package com.example.demo.Services;

import com.example.demo.Entities.*;
import com.example.demo.Repositories.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageEntity create(ChatEntity chat, User user, String text){
        MessageEntity message = new MessageEntity();
        message.setChat(chat);
        message.setUser(user);
        message.setMessage(text);
        return messageRepository.save(message);
    }

    public MessageEntity create(ChatEntity chat, User user, String text, File file){
        MessageEntity message = new MessageEntity();
        message.setChat(chat);
        message.setUser(user);
        message.setMessage(text);
        message.setFile(file);
        return messageRepository.save(message);
    }


    public List<MessageEntity> getLastInChat(List<ChatEntity> chats){
        MessageEntity list[] = new MessageEntity[chats.size()];
        for(int i = 0; i < chats.size(); i++){
            MessageEntity message = getLastInChat(chats.get(i));
            list[i] = message;
        }

        return Arrays.asList(list);
    }

    public MessageEntity getLastInChat(ChatEntity chat){
        List<MessageEntity> list = messageRepository.lastInChat(chat);
        return list.size() > 0 ? list.get(0) : null;
    }

    public MessageEntity deleteMessage(int id){
        MessageEntity messageEntity = messageRepository.findById(id).get();
        messageRepository.delete(messageEntity);
        return messageEntity;
    }

    public MessageEntity updateMessage(int id, String message){
        MessageEntity messageEntity = messageRepository.findById(id).get();
        messageEntity.setMessage(message);
        messageEntity.setEdited(true);
        messageRepository.save(messageEntity);
        return messageEntity;
    }

    public List<MessageEntity> findAllByChat(ChatEntity chat){
        return messageRepository.findAllByChat(chat);
    }

    public MessageEntity findById(int id){
        return messageRepository.findById(id).get();
    }
}
