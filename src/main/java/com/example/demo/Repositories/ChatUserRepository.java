package com.example.demo.Repositories;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.ChatUserEntity;
import com.example.demo.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatUserRepository extends JpaRepository<ChatUserEntity, Integer> {

    @Query("SELECT u FROM ChatUserEntity u WHERE u.user = :user")
    List<ChatUserEntity> getByUser(@Param("user") UserEntity user);

    @Query("SELECT ch FROM ChatUserEntity ch WHERE ch.chat = :chat AND ch.user <> :user")
    ChatUserEntity getUserByChatAndNotUser(@Param("chat") ChatEntity chat,@Param("user") UserEntity user);
}
