package com.example.demo.Controller;

import com.example.demo.Models.NewUserDTO;
import com.example.demo.Services.DatabaseUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    @Autowired
    final DatabaseUserService userService;


    @RequestMapping(value = "/req")
    @CrossOrigin(origins = "*")
    @ResponseBody
    public boolean regUser(@RequestBody NewUserDTO newUserDTO){
        userService.createUser(newUserDTO.getUsername(), encoder.encode(newUserDTO.getPassword()), newUserDTO.getAvatar());
        return true;
    }
}
