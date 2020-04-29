package com.example.demo.Entities;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@Setter
@ToString
@NoArgsConstructor
public class NotificationOptions {
    private boolean newChat;
    private boolean eachMessage;
    private boolean sendMessage;
}