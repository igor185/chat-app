package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NewUserDTO {
    private String username;
    private String password;
    private String avatar;
}
