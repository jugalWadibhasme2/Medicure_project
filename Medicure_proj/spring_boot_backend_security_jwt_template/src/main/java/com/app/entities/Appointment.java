package com.app.entities;

import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.Enum.Status;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@ToString

@Table(name="Appointments")
public class Appointment extends Patient {

@Id
@GeneratedValue(strategy= GenerationType.IDENTITY)	
private int appointmentId;

@ManyToOne(cascade=CascadeType.ALL)
@JoinColumn(name="patient_id")
	private int patient;

@ManyToOne(cascade=CascadeType.ALL)
@JoinColumn(name="doctor_id")
	private int doctor;

// @Columns(columns="appointment_date",nullable=false)
// 	private Date appointmentDate;

@OneToOne(cascade=CascadeType.ALL)
@JoinColumn(name="timeSlot_id")
	private Time timeSlot;

@Enumerated(EnumType.STRING)
	private Status status;
	
	
	//	+ appointmentID: int (PK)
//	  + patient: Patient (FK)
//	  + doctor: Doctor (FK)
//	  + date: Date
//	  + timeSlot: TimeSlot (FK)
//	  + reason: String (optional)
//	  + status: String (e.g., Scheduled, Pending Confirmation, Completed, Cancelled)
	
}
