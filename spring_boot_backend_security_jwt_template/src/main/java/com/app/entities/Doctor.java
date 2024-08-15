package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

// import org.springframework.boot.autoconfigure.security.SecurityProperties;

import com.app.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Doctors")

public class Doctor extends User{

@Id

@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorId;

@Column(name="Doctor_name",nullable= false)
	private String doctorName;

@Column(name="qualification",nullable= false)
	private String specialization;

@Column(name="Availability", nullable=false)
	private String availability;

@Enumerated(EnumType.STRING)
    private Role role=Role.DOCTOR;

@OneToMany(mappedBy="Appointment")
	private List<Appointment> booking;
	
@OneToOne
	private String schedule;
	
}


//	 doctorID: int (PK)
//	  + name: String
//	  + specialization: String
//	  + availability: String // Working hours description (optional)
//	  + appointments: List<Appointment> // Navigation association (optional)
//	  + schedule: Schedule (optional) // One-to-one association (optional)