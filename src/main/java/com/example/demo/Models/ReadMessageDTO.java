package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReadMessageDTO {
    private Integer userId;
    private Integer chatId;
}
