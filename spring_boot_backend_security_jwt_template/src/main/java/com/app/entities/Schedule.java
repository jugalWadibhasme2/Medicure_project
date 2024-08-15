package com.app.entities;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.Enum.Days;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Table(name="Schedule")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="Doctors")
	private int doctor;

	@Column(name="available_days")
	private List<Days> availableDays;
	
	@Column(name="Scheduled_working_hours")
	private List<WorkingHour> scheduledWorkingHours;
	
	 }

	 //	 doctor: Doctor (PK) // One-to-one association with Doctor
//	  + availableDays: List<String> (e.g., "Monday", "Tuesday")
//	  + workingHours: List<WorkingHour>