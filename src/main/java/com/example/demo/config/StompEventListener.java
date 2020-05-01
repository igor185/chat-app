package com.example.demo.config;


import com.example.demo.Services.DatabaseUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.List;
import java.util.Map;


@Component
public class StompEventListener implements ApplicationListener<SessionConnectEvent> {
    @Autowired
    DatabaseUserService userService;

    @Override
    public void onApplicationEvent(SessionConnectEvent event) {
        try {
            Long userId = Long.parseLong((
                    (Map<String, List<String>>) event.getMessage().getHeaders().get("nativeHeaders")).get("user").get(0)
            );
            String session = StompHeaderAccessor.wrap(event.getMessage()).getSessionId();

            userService.setUserSessionId(userId, session);
        }catch (Exception e){
            System.out.println(e);
        }

    }

    @EventListener
    public void onSocketDisconnected(SessionDisconnectEvent event) {
        StompHeaderAccessor sha = StompHeaderAccessor.wrap(event.getMessage());
        String session = sha.getSessionId();

        userService.removeSessionId(session);
    }
}