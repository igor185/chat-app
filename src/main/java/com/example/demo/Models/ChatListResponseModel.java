package com.example.demo.Models;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ChatListResponseModel {
    private ChatEntity chat;
    private MessageEntity message;
    private User user;
}
