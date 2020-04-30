package com.example.demo.Entities;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@Setter
@ToString
public class NotificationOptions {
    private boolean newChat;
    private boolean eachMessage;
    private boolean sendMessage;

    public NotificationOptions(){
        this.newChat = false;
        this.eachMessage = false;
        this.sendMessage = false;
    }
}