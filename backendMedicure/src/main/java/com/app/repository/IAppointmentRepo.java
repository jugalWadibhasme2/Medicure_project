package com.app.repository;

import com.app.entities.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAppointmentRepo extends JpaRepository<Appointment, Long> {

	
	//@Query("SELECT a FROM appointments a WHERE a.patient_id = :patientId")
	@Query("SELECT a FROM Appointment a WHERE a.patient.patientId = :patientId")
	List<Appointment> findAppointmentsByPatientId(@Param("patientId")Long patientId);
	@Query("SELECT a FROM Appointment a WHERE a.doctor.doctorId = :doctorId")
	List<Appointment> findAppointmentsByDoctorId(@Param("doctorId")Long doctorId);
	//List<Appointment> findAppointmentsByDoctorName(String doctorName);
	List<Appointment> findAppointmentsByDoctor(Long doctorId);
}
