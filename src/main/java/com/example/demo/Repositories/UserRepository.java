package com.example.demo.Repositories;

import com.example.demo.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u left join fetch u.roles r where u.username=:username")
    Optional<User> findByUsername(@Param("username") String username);

    @Query("SELECT u FROM User u WHERE u.id = :id")
    User findByUserId(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO USER_ROLE(APP_USER_ID, ROLE) VALUES(:id, 'MEMBER');", nativeQuery = true)
    void insertMember(@Param("id") long id);

    @Query("SELECT u FROM User u WHERE u.username LIKE CONCAT('%',:name,'%')")
    List<User> search(@Param("name") String name);
}