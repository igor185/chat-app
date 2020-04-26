package com.example.demo.controller;

import com.example.demo.Entities.User;
import com.example.demo.Services.DatabaseUserService;
import com.example.demo.auth.JwtAuthenticationToken;
import com.example.demo.security.model.UserContext;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProfileEndpoint {

    @Autowired
    private final DatabaseUserService userService;

    @RequestMapping(value = "/api/me", method = RequestMethod.GET)
    public @ResponseBody
    User get(Authentication auth) {
        return userService.findByName(
                ((UserContext)auth.getPrincipal()).getUsername()
        );
    }
}