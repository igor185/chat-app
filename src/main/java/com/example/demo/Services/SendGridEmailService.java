package com.example.demo.Services;


import com.sendgrid.*;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SendGridEmailService {
    @Autowired
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private final String EMAIL = "igor-babin-chat-java.herokuapp.com@gmail.com";
    private String KEY;
    private String URL;

    public SendGridEmailService(){
//        Dotenv dotenv = Dotenv.configure().directory(".").load();
//        KEY = dotenv.get("SENDGRID");
//        URL = dotenv.get("URL");
        KEY = System.getenv("SENDGRID");
        URL = System.getenv("URL");
        System.out.println(KEY);
        System.out.println(URL);
    }

    public void sendMail(String toS, String subject, String body) throws IOException {
        Email from = new Email(EMAIL);
        Email to = new Email(toS);
        Content content = new Content("text/html", body);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(KEY);
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }

    public void sendConfirmEmail(String email) throws IOException {
        this.sendMail(
                email,
                "Confirm email",
                confirmBody(email)
        );
    }

    public void sendNewChatEmail(String email, String message, String url) throws IOException {
        this.sendMail(
                email,
                "New chat",
                newChatBody(message, url)
        );
    }

    public void sendNewMessageEmail(String email, String message, String url) throws IOException {
        this.sendMail(
                email,
                "New message",
                newMessageBody(message, url)
        );
    }

    public void sendMessageEmail(String email, String username, String message, String url) throws IOException {
        this.sendMail(
                email,
                "Resend message",
                sendMessageBody(username, message, url)
        );
    }

    public String confirmBody(String email) {
        return getBodyMessage(
                "<div>Click <a href=\"" + URL + "/email-confirm/" + encoder.encode(email) + "\">link</a> to confirm email</div>"
        );
    }

    public String newChatBody(String message, String url){
        return getBodyMessage(
                "<div>You have one new chat with next message: "+ message +"</div>" +
                        (url != "" ? "<div>There is one attached file <a href=\""+ url + "\">link</a></div>" : "")
        );
    }

    public String newMessageBody(String message, String url){
        return getBodyMessage(
                "<div>You have one new message: "+ message +"</div>" +
                        (url != "" ? "<div>There is one attached file <a href=\""+ url + "\">link</a></div>" : "")
        );
    }

    public String sendMessageBody(String username, String message, String url){
        return getBodyMessage(
                "<div>You have send one new message from "+ username + " with text: "+ message +"</div>" +
                        (url != "" ? "<div>There is one attached file <a href=\""+ url + "\">link</a></div>" : "")
        );
    }


    public String getBodyMessage(String value) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Document</title>\n" +
                "</head>\n" +
                "<body>\n" +
                value +
                "</body>\n" +
                "</html>";
    }
}