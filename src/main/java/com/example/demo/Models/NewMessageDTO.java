package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NewMessageDTO {
    String message;
    Integer chatId;
    Integer userId;
}
