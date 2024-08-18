package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AppointmentDto;
import com.app.entities.Appointment;
import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.repository.IAppointmentRepo;
import com.app.repository.IDoctorRepo;
import com.app.repository.IPatientRepo;

@Service
public class AppointmentServiceImpl implements IAppointmentService {

    @Autowired
    private IAppointmentRepo appointmentRepository;
    @Autowired
    private IPatientRepo patientRepository;
    @Autowired
    private IDoctorRepo doctorRepository;

    @Override
    public Appointment saveAppointment(AppointmentDto appointmentDTO) {
    	Appointment newappointment=new Appointment();
    	Optional<Doctor> enteredDoctor=doctorRepository.findById(appointmentDTO.getDoctor());
    	Optional<Patient> enteredPatient=patientRepository.findById(appointmentDTO.getPatient());
    	newappointment.setAppointmentId(appointmentDTO.getAppointmentId());
    	newappointment.setDoctor(enteredDoctor.get());
    	newappointment.setPatient(enteredPatient.get());
        return appointmentRepository.save(newappointment);
    }

    @Override
    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

    @Override
    public List<Appointment> findAppointmentsByPatientId(Long patientId) {
        return appointmentRepository.findAppointmentsByPatientId(patientId);
    }

    @Override
    public List<Appointment> findAppointmentsByDoctorId(Long doctorId) {
        return appointmentRepository.findAppointmentsByDoctorId(doctorId);
    }
}
