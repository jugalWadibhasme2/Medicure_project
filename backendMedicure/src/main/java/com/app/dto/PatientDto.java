package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;


import com.app.Enum.Role;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {

    // private int PatientId;
    private String firstName;

	private String lastName;

	private String email;

	private String password;

    private int contactNumber;

    // @Enumerated(EnumType.STRING)
    // private Role role;
}
