package com.example.demo.Seeds;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Getter
@Setter
public class IndexSeed {
    private final UserSeed userSeed;
    private final ChatSeed chatSeed;
    private final MessageSeed messageSeed;


    public void seed(){
        userSeed.seed();
        chatSeed.seed();
        messageSeed.seed();
    }
}
