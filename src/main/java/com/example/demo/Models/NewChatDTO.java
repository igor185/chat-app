package com.example.demo.Models;

import com.example.demo.Entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class NewChatDTO {
    public NewChatDTO(int chatId, User user1, User user2){
        this.chatId = chatId;
        this.user1 = user1;
        this.user2 = user2;
    }
    int chatId;
    User user1;
    User user2;
}
