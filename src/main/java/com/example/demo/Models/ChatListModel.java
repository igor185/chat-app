package com.example.demo.Models;

import com.example.demo.Entities.MessageEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ChatListModel {
    private String id;
    private MessageEntity lastMessage;
}
