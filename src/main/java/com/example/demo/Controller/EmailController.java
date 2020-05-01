package com.example.demo.Controller;

import com.example.demo.Entities.MessageEntity;
import com.example.demo.Entities.User;
import com.example.demo.Services.DatabaseUserService;
import com.example.demo.Services.MessageService;
import com.example.demo.Services.SendGridEmailService;
import com.example.demo.Services.UserService;
import com.example.demo.security.model.UserContext;
import com.github.lambdaexpression.annotation.RequestBodyParam;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class EmailController {
    @Autowired
    private final SendGridEmailService sendGridEmailService;

    @Autowired
    private final DatabaseUserService userService;

    @Autowired
    private final MessageService messageService;


    @RequestMapping(value = "/api/email/confirm", method = RequestMethod.POST)
    @ResponseBody
    public boolean sendConfirmEmail(@RequestBodyParam String email) throws IOException {
            this.sendGridEmailService.sendConfirmEmail(email);
            return true;
    }

    @RequestMapping(value = "/api/email/send-message", method = RequestMethod.POST)
    @ResponseBody
    public boolean sendMessage(@RequestBodyParam Integer messageId, Authentication auth) throws IOException {
        System.out.println(messageId);
        User user= userService.findByName(((UserContext)auth.getPrincipal()).getUsername());
        MessageEntity message = messageService.findById(messageId);
        if(user.isConfirm()) {
            sendGridEmailService.sendMessageEmail(
                    user.getEmail(),
                    message.getUser() != null ? message.getUser().getUsername() : "",
                    message.getMessage(),
                    message.getFile() != null ? message.getFile().getFileDownloadUri() : "");
        }
        return true;
    }
}
