package com.example.demo.Services;

import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DatabaseUserService implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public DatabaseUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public Optional<User> getByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    public User findById(long id){
        User user = userRepository.findByUserId(id);
        return user;
    }

    public User findByName(String name){
        return userRepository.findByUsername(name).get();
    }

    public User createUser(String username, String password, String avatar){
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setAvatar(avatar);
        userRepository.save(user);
        System.out.println("no error");
        userRepository.insertMember(user.getId());
        return user;
    }
}