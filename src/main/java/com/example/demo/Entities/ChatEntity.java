package com.example.demo.Entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "chats")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ChatEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
}