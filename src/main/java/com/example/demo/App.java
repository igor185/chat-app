package com.example.demo;

import com.example.demo.Seeds.IndexSeed;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@CrossOrigin(origins = "*")
public class App {

    public static void main(String[] args) {

        ApplicationContext applicationContext = SpringApplication.run(App.class, args);


        IndexSeed indexSeed = applicationContext.getBean(IndexSeed.class);

        indexSeed.seed();

    }
}

