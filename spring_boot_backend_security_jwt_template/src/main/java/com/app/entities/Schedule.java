package com.app.entities;

import java.sql.Time;

import com.app.Enum.Days;

public class Schedule {
//	 doctor: Doctor (PK) // One-to-one association with Doctor
//	  + availableDays: List<String> (e.g., "Monday", "Tuesday")
//	  + workingHours: List<WorkingHour>
	
	private int doctor;
	private Days availableDays;
	
	private Time workingHours;
	
	private Schedule() {

	}
	
	public Schedule(int doctor, Days availableDays, Time workingHours) {

		this.doctor = doctor;
		this.availableDays = availableDays;
		this.workingHours = workingHours;
	}

	@Override
	public String toString() {
		return "Schedule [doctor=" + doctor + ", availableDays=" + availableDays + ", workingHours=" + workingHours
				+ "]";
	}

	public int getDoctor() {
		return doctor;
	}

	public void setDoctor(int doctor) {
		this.doctor = doctor;
	}

	public Days getAvailableDays() {
		return availableDays;
	}

	public void setAvailableDays(Days availableDays) {
		this.availableDays = availableDays;
	}

	public Time getWorkingHours() {
		return workingHours;
	}

	public void setWorkingHours(Time workingHours) {
		this.workingHours = workingHours;
	}
	
	 }
