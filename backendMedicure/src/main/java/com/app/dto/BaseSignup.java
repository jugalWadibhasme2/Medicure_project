package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BaseSignup {

    @NotBlank(message = "First Name required")
    private String fistname;
    
    @NotBlank(message = "Last Name required")
    private String lastname;
    
    @Email(message = "Invalid Email!!!")
    private String email;

    @JsonProperty(access = Access.WRITE_ONLY) // this property only used during de-ser.
    private String password;

    private String contactNumber;

    // Constructor with fields
    public BaseSignup(String fistname,String lastname, String email, String password, String contactNumber) {
        this.fistname = fistname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
    }
}
