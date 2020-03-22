package com.example.demo.Seeds;

import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Component
@RequiredArgsConstructor
public class UserSeed {
    private final EntityManager entityManager;
    private final UserRepository userRepository;

    @Transactional
    public void seed(){
        List<UserEntity> users = entityManager.createQuery("SELECT u FROM UserEntity u")
                .getResultList();

        if(users.size() != 0){
            System.out.println("no seed");
            return;
        }
        System.out.println("seed");

        UserEntity user1 = new UserEntity();
        user1.setName("admin");
        user1.setPassword("root");
        userRepository.save(user1);

        user1 = new UserEntity();
        user1.setName("igor");
        user1.setPassword("password");
        userRepository.save(user1);

        user1 = new UserEntity();
        user1.setName("sofia");
        user1.setPassword("password");
        userRepository.save(user1);
    }
}
