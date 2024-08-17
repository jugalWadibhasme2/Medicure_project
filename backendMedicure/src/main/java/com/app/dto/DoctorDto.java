package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {

    // private Long doctorId;          
    private String firstName; 
    private String lastname;
    
    private String qualification;   
    private String availability;    
    private String email;           
    private String contactNum;      
       
	// @Enumerated(EnumType.STRING)
    // private Role role;
}
