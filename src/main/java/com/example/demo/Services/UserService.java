package com.example.demo.Services;

import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserEntity findById(int id){
        return userRepository.findByUserId(id);
    }
}
