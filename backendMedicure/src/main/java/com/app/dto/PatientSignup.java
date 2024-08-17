package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatientSignup extends BaseSignup {

    private int patientId;
    private String role; // Assuming role is a String; if it's an enum, adjust accordingly

    // Constructor with fields including the ones from BaseSignup
    public PatientSignup(String fistname, String lastname, String email, String password, String contactNumber, int patientId, String role) {
        super(fistname, lastname, email, password, contactNumber);
        this.patientId = patientId;
        this.role = role;
    }

    // Additional methods or overrides can be added here if necessary
}
