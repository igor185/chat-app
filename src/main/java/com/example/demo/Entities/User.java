package com.example.demo.Entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "APP_USER")
@Data
public class User {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "avatar", nullable = true)
    private String avatar;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "APP_USER_ID", referencedColumnName = "ID")
    private List<UserRole> roles;

}