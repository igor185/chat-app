package com.example.demo.Seeds;

import com.example.demo.Entities.ChatUserEntity;
import com.example.demo.Entities.MessageEntity;
import com.example.demo.Services.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class MessageSeed {
    private final EntityManager entityManager;
    private final MessageService messageService;
    private final ChatService chatService;
    private final DatabaseUserService userService;

    public void seed(){
        String[] messages = {
                "It is just like man's vanity and impertinence to call an animal dumb because it is dumb to his dull perceptions.",
                "Random Quote Generator\n" +
                        "Number of quotes:\t\n" +
                        "A person is a person because he recognizes others as persons.",
                "t may be true that the weak will always be driven to the wall; but it is the task of a just society to see that the wall is climbable.",
                "A composition in verse, in which, without employing any of the methods of humor, the writer aims to produce in the reader's mind the dampest kind of dejection.",
                "if circumstances should at any at all inferior to them in discipline and the use of arms, who stand ready to defend their own rights and those of their fellow citizens.",
                "man who undertakes the management of our spiritual affairs as a method of better his temporal ones.",
                "In all differences consider that both you and your opponent or enemy are mortal, and that ere long your very memories will be extinguished.",
                "Have you heard of the wonderful one-hoss shay, That was built in such a logical way It ran a hundred years to a day?",
                "All power is a trust; and we are accountable for its exercise.",
                "A disease which the patient and his friends frequently mistake for deep religious conviction and concern for the salvation of mankind.",
                "One doctor, singly like the sculler plies, The patient struggles, and by inches dies; But two physicians, like a pair of oars, Waft him right swiftly to the Stygian shores",
                "If a thing is worth doing, it is worth doing slowly ... very slowly.",
                "Immodest words admit of no defence, For want of decency is want of sense."
        };

        List<String> mess = Arrays.asList(messages);

        List<ChatUserEntity> chats = entityManager.createQuery("SELECT c FROM ChatUserEntity c").getResultList();



        for(int i = 0; i < chats.size(); i++){
            Collections.shuffle(mess);
            for(int j = 0; j < mess.size(); j++){
                messageService.create(
                        chatService.findById(chats.get(i).getChat().getId()),
                        userService.findById(chats.get(i).getUser().getId()),
                        mess.get(j)
                );
            }
        }
    }
}
