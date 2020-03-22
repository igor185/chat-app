package com.example.demo.Controller;

import com.example.demo.Entities.UserEntity;
import com.example.demo.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class IndexController {
    private final UserRepository userRepository;

    @RequestMapping({ "/", "" })
    public String index() {
        List<UserEntity> users = userRepository.findAll();
        for(UserEntity u: users){
            System.out.println(u.toString());
        }
        System.out.println("size = " +users.size());
        return "index";
    }

}
