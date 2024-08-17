package com.app.entities;

import javax.persistence.*;
import com.app.Enum.Role;

@MappedSuperclass
public abstract class User {


    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "contact_num", nullable = false)
    private String contactN;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    // Getters and Setters
}
