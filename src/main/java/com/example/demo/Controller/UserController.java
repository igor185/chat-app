package com.example.demo.Controller;

import com.example.demo.Models.NewUserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {


    @RequestMapping(value = "/req")
    @CrossOrigin(origins = "*")
    @ResponseBody
    public boolean regUser(@RequestBody NewUserDTO newUserDTO){
        System.out.println(newUserDTO);
        return true;
    }
}
