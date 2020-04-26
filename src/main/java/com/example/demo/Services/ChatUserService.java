package com.example.demo.Services;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.ChatUserEntity;
import com.example.demo.Entities.User;
import com.example.demo.Models.ChatListResponseModel;
import com.example.demo.Repositories.ChatUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatUserService {
    private final ChatUserRepository chatUserRepository;
    private final DatabaseUserService userService;
    private final ChatService chatService;
    private final MessageService messageService;

    public ChatUserEntity create(int user_id, int chat_id){
        ChatUserEntity chat_user = new ChatUserEntity();
        chat_user.setUser(userService.findById(user_id));
        chat_user.setChat(chatService.findById(chat_id));

        return chatUserRepository.save(chat_user);
    }

    public ChatUserEntity create(User user, ChatEntity chat){
        ChatUserEntity chat_user = new ChatUserEntity();
        chat_user.setChat(chat);
        chat_user.setUser(user);

        return chatUserRepository.save(chat_user);
    }

    public void createChat(int id, User user1, User user2){
        ChatEntity chat = chatService.createChat(id);
        create(user1, chat);
        create(user2, chat);
    }

    public List<ChatEntity> getChatsByUser(int id){
        User user = userService.findById(id);
        List<ChatUserEntity> list = chatUserRepository.getByUser(user);

        return chatService.findByList(list);
    }

    public User getUserByChatAndNotUser(ChatEntity chat, User user){
        return chatUserRepository.getUserByChatAndNotUser(chat, user).getUser();
    }

    public ArrayList<ChatListResponseModel> getChatListByUserName(String name){
        User user = userService.findByName(name);
        System.out.println(user);
        List<ChatUserEntity> chats = chatUserRepository.getByUser(user);
        System.out.println(chats);
        ArrayList<ChatListResponseModel> list = new ArrayList<ChatListResponseModel>();
        for(ChatUserEntity chat: chats){
            ChatListResponseModel model = new ChatListResponseModel();
            model.setChat(chat.getChat());
            model.setMessage(messageService.getLastInChat(chat.getChat()));
            model.setUser(getUserByChatAndNotUser(chat.getChat(), chat.getUser()));
            list.add(model);
        }
        System.out.println(list);
        return list;
    }
}
