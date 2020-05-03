package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
public class NewUserDTO {
    @NotNull
    @Size(min = 4, max = 20, message = "Login from 4 to 20 characters")
    private String username;

    @NotNull
    @Size(min = 4, max = 20, message = "Password from 4 characters")
    private String password;

    @NotNull
    @Size(min = 1, message = "Not empty avatar")
    private String avatar;
}
