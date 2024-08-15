package com.app.dto;

import com.app.entities.Appointment;

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
public class DoctorDto {
private Long doctorId;

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private String contactNumber;

	private String specialization;

	private Appointment appointment;
    
	@Enumerated(EnumType.STRING)
    private Role role;
}
