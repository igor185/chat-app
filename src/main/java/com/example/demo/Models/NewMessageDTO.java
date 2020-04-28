package com.example.demo.Models;

import com.example.demo.Entities.DBFile;
import com.example.demo.Entities.File;
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
    File file;
}
