package com.example.demo.Entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "APP_USER")
@Data
@Getter
@Setter
@ToString
public class User {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique=true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "avatar", nullable = true)
    private String avatar;

    @Column(name = "about", nullable = true)
    private String about;

    @Column(name = "email", nullable = true)
    private String email;

    @Column(name = "confirm", columnDefinition = "boolean default false")
    private boolean confirm;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "APP_USER_ID", referencedColumnName = "ID")
    private List<UserRole> roles;

    @AttributeOverrides({
            @AttributeOverride(name = "newChat",
                    column = @Column(name = "newChat", columnDefinition = "boolean default false")),
            @AttributeOverride(name = "eachMessage",
                    column = @Column(name = "eachMessage", columnDefinition = "boolean default false")),
            @AttributeOverride(name = "sendMessage",
                    column = @Column(name = "sendMessage", columnDefinition = "boolean default false")),
    })
    @Embedded
    @Column(name = "options", nullable = true)
    private NotificationOptions options;


    @Column(name = "isOnline", columnDefinition = "boolean default false")
    private boolean isOnline;

    @Column(name = "time")
    @UpdateTimestamp
    private Date time;

    @Column(name = "session")
    private String session;
}