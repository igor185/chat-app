package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Email;

@Getter
@Setter
@ToString
public class NewEmailDTO {
    @Email(message = "Email should be valid")
    String email;
}
