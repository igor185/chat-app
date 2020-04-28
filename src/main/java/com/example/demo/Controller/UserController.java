package com.example.demo.Controller;

import com.example.demo.Entities.User;
import com.example.demo.Models.NewUserDTO;
import com.example.demo.Services.DatabaseUserService;
import com.example.demo.security.model.UserContext;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    @Autowired
    final DatabaseUserService userService;


    @RequestMapping(value = "/req")
    @ResponseBody
    public boolean regUser(@RequestBody NewUserDTO newUserDTO){
        userService.createUser(newUserDTO.getUsername(), encoder.encode(newUserDTO.getPassword()), newUserDTO.getAvatar());
        return true;
    }

    @RequestMapping(value = "/api/users")
    @ResponseBody
    public List<User> searchUsers(@RequestParam String search, Authentication auth){
        User user = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        return userService.search(search, user);
    }

}
