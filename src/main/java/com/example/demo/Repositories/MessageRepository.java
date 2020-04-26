package com.example.demo.Repositories;

import com.example.demo.Entities.ChatEntity;
import com.example.demo.Entities.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<MessageEntity, Integer> {

    @Query(value = "SELECT m FROM MessageEntity m WHERE m.chat = :chat ORDER BY m.time DESC")
    List<MessageEntity> lastInChat(@Param("chat") ChatEntity chat);


    @Query("SELECT m FROM MessageEntity m WHERE m.chat = :chat ORDER BY m.time")
    List<MessageEntity> findAllByChat(@Param("chat") ChatEntity chatEntity);

}
