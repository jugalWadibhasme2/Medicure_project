package com.app.service;

import com.app.entities.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmentService {

    
    Appointment saveAppointment(Appointment appointment);

    
    Optional<Appointment> getAppointmentById(Long id);

    
    List<Appointment> getAllAppointments();

   
    void deleteAppointment(Long id);

    
    List<Appointment> findAppointmentsByPatientId(Long patientId);

    
    List<Appointment> findAppointmentsByDoctorId(Long doctorId);
}
