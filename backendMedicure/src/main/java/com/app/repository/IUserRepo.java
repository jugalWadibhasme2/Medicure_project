package com.app.repository;

import com.app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepo extends JpaRepository<User, Long> {

    
    List<User> findByFirstNameContainingIgnoreCase(String firstName);

    
    List<User> findByLastNameContainingIgnoreCase(String lastName);

    
    List<User> findByEmailContainingIgnoreCase(String email);
}
