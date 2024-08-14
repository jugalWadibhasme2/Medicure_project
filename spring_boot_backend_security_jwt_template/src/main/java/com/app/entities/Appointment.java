package com.app.entities;

import java.sql.Time;
import java.util.Date;

import com.app.Enum.Status;

public class Appointment {
//	+ appointmentID: int (PK)
//	  + patient: Patient (FK)
//	  + doctor: Doctor (FK)
//	  + date: Date
//	  + timeSlot: TimeSlot (FK)
//	  + reason: String (optional)
//	  + status: String (e.g., Scheduled, Pending Confirmation, Completed, Cancelled)
	private int appointmentId;
	private int patient;
	private int doctor;
	private Date appointmentDate;
	private Time timeSlot;
	private String reason;
	private Status status;
	
	public Appointment() {}
	
	public Appointment(int appointmentId, int patient, int doctor, Date appointmentDate, Time timeSlot, String reason,
			Status status) {
		super();
		this.appointmentId = appointmentId;
		this.patient = patient;
		this.doctor = doctor;
		this.appointmentDate = appointmentDate;
		this.timeSlot = timeSlot;
		this.reason = reason;
		this.status = status;
	}

	

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public int getPatient() {
		return patient;
	}

	public void setPatient(int patient) {
		this.patient = patient;
	}

	public int getDoctor() {
		return doctor;
	}

	public void setDoctor(int doctor) {
		this.doctor = doctor;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Time getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(Time timeSlot) {
		this.timeSlot = timeSlot;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", patient=" + patient + ", doctor=" + doctor
				+ ", appointmentDate=" + appointmentDate + ", timeSlot=" + timeSlot + ", reason=" + reason + ", status="
				+ status + "]";
	}
	
}
