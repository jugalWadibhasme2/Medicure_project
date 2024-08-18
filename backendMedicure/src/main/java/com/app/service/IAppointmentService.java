package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AppointmentDto;
import com.app.entities.Appointment;

public interface IAppointmentService {
    Appointment saveAppointment(AppointmentDto appointment);
    Optional<Appointment> getAppointmentById(Long id);
    List<Appointment> getAllAppointments();
    void deleteAppointment(Long id);
    List<Appointment> findAppointmentsByPatientId(Long patientId);
//    List<Appointment> findAppointmentsByDoctorName(String doctorName);
	List<Appointment> findAppointmentsByDoctorId(Long doctorId);
}
