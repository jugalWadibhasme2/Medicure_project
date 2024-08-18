package com.app.dto;

//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//
//import com.app.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {

    private Long doctorId;          // Maps to doctorId in Doctor entity
    private String firstName; 
    private String lastname;
    // Maps to doctorName in Doctor entity
    private String qualification;   // Maps to qualification in Doctor entity
    private String availability;    // Maps to availability in Doctor entity
    private String email;           // Email of the doctor (from User superclass)
    private String contactNum;      // Contact number of the doctor (from User superclass)
       
//	@Enumerated(EnumType.STRING)
//    private Role role;
}
