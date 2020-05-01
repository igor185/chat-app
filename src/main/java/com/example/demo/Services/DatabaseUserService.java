package com.example.demo.Services;

import com.example.demo.Entities.NotificationOptions;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DatabaseUserService implements UserService {
    @Autowired
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
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
        try {
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            user.setAvatar(avatar);
            user.setOptions(new NotificationOptions());
            userRepository.save(user);
            System.out.println("no error");
            userRepository.insertMember(user.getId());
            return user;
        }catch (Exception e){
            throw new Error("Not uniq username");
        }
    }

    public User updateAvatar(User user, String src){
        user.setAvatar(src);
        return userRepository.save(user);
    }

    public User update(User user){
        return userRepository.save(user);
    }

    public List<User> search(String name, User user){
        return userRepository.search(name, user);
    }

    public boolean confirmEmail(User user, String email){
        if(user.getEmail() == null){
            return false;
        }
        if(encoder.matches(user.getEmail(), email)){
            user.setConfirm(true);
            update(user);
            return true;
        }
        return false;
    }

    public void setUserSessionId(Long id, String session){
        User u = userRepository.findByUserId(id);
        u.setSession(session);
        u.setOnline(true);
        userRepository.save(u);

        simpMessagingTemplate.convertAndSend("/res/online", id);
        System.out.println("online");
        System.out.println(id);
    }

    public void removeSessionId(String session){
        List<User> users = userRepository.bySession(session);
        for(int i = 0; i < users.size(); i++){
            User u = users.get(i);
            u.setSession("");
            u.setOnline(false);
            u = userRepository.save(u);

            simpMessagingTemplate.convertAndSend("/res/offline", u.getId());
            System.out.println("offline");
            System.out.println(u.getId());
        }
        System.out.println(userRepository.findByUserId((long) 1));
    }
}