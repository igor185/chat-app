package com.example.demo.Services;

import com.example.demo.Entities.User;

import java.util.Optional;


public interface UserService {
    Optional<User> getByUsername(String username);
}