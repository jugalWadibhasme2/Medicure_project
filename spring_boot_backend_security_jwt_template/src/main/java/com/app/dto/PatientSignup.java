package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.Enum.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class PatientSignup extends BaseSignup{
	
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long patientId;

    //private Specialization specialization;
	
	@Enumerated(EnumType.STRING)
    private Role role=Role.PATIENT;

}
