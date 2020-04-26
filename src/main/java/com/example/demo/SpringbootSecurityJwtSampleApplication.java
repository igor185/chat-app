package com.example.demo;

import com.example.demo.Seeds.IndexSeed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class SpringbootSecurityJwtSampleApplication {
    @Autowired
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public static void main(String[] args) {
        ApplicationContext applicationContext = SpringApplication.run(SpringbootSecurityJwtSampleApplication.class, args);


        IndexSeed indexSeed = applicationContext.getBean(IndexSeed.class);

        indexSeed.seed();
    }

}

