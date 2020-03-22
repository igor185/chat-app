package com.example.demo;

import com.example.demo.Seeds.IndexSeed;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(DemoApplication.class, args);

		IndexSeed indexSeed = applicationContext.getBean(IndexSeed.class);

		indexSeed.seed();
	}

}
