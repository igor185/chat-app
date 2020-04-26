package com.example.demo.Repositories;

import com.example.demo.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<ChatEntity, Integer> {

    @Query("SELECT c FROM ChatEntity c WHERE c.id = :id")
    ChatEntity findByIdEntity(@Param("id") Integer id);
}
