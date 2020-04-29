package com.example.demo.Controller;

import com.example.demo.Entities.NotificationOptions;
import com.example.demo.Entities.User;
import com.example.demo.Models.NewUserDTO;
import com.example.demo.Services.DatabaseUserService;
import com.example.demo.security.model.UserContext;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.lambdaexpression.annotation.RequestBodyParam;
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

    @RequestMapping(value = "/api/user/avatar", method = RequestMethod.POST)
    @ResponseBody
    public String updateAvatar(@RequestBodyParam String src, Authentication auth) throws JsonProcessingException {
        User user = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        userService.updateAvatar(user, src);
        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(src);

        return res;
    }

    @RequestMapping(value = "/api/user/about", method = RequestMethod.POST)
    @ResponseBody
    public String updateAbout(@RequestBodyParam String message, Authentication auth) throws JsonProcessingException {
        User user = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        user.setAbout(message);
        userService.update(user);

        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(message);

        return res;
    }

    @RequestMapping(value = "/api/user/email", method = RequestMethod.POST)
    @ResponseBody
    public String updateEmail(@RequestBodyParam String email, Authentication auth) throws JsonProcessingException {
        User user = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        user.setEmail(email);
        user.setConfirm(false);
        userService.update(user);

        ObjectMapper mapper = new ObjectMapper();
        String res = mapper.writeValueAsString(email);

        return res;
    }

    @RequestMapping(value = "/api/user/confirm", method = RequestMethod.POST)
    @ResponseBody
    public boolean confirmEmail(@RequestBodyParam String token, Authentication auth){
        System.out.println(token);
        User user = userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        System.out.println(user);
        return userService.confirmEmail(user, token);
    }

    @RequestMapping(value = "/api/user/options", method = RequestMethod.POST)
    @ResponseBody
    public boolean updateOptions(@RequestBody NotificationOptions options, Authentication auth){
        try {
            User user = userService.findByName(((UserContext) auth.getPrincipal()).getUsername());
            user.setOptions(options);
            userService.update(user);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }
}
