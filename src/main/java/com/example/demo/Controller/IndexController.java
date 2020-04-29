package com.example.demo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequiredArgsConstructor
public class IndexController {

    @RequestMapping({ "/", "" })
    public String index() {
        return "index";
    }
    @RequestMapping(value = "/email**")
    public String email(){
        return index();
    }
}
