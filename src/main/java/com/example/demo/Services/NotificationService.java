package com.example.demo.Services;

import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {

    @Autowired
    MessageService messageService;

    SendGridEmailService sendGridEmailService = new SendGridEmailService();

    public void sendNotificationAboutMessage(User user1, User user2, MessageEntity message) throws IOException {
        List<MessageEntity> messages = messageService.findAllByChat(message.getChat());

        if(messages.size() == 1){
            sendNewChat(user1, message);
            sendNewChat(user2, message);
        }else {
            sendNewMessage(user1, message);
            sendNewMessage(user2, message);
        }



    }

    public void sendNewChat(User u, MessageEntity messageEntity) throws IOException {
        if(u.getOptions().isNewChat() && u.isConfirm()){
            sendGridEmailService.sendNewChatEmail(u.getEmail(), messageEntity.getMessage(), messageEntity.getFile() == null ? "" : messageEntity.getFile().getFileDownloadUri());
        }
    }

    public void sendNewMessage(User u, MessageEntity messageEntity) throws IOException {
        if(u.getOptions().isEachMessage() && u.isConfirm()){
            sendGridEmailService.sendNewMessageEmail(u.getEmail(), messageEntity.getMessage(), messageEntity.getFile() == null ? "" : messageEntity.getFile().getFileDownloadUri());
        }
    }
}
