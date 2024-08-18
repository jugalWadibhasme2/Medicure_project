package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDto;
import com.app.entities.Appointment;
import com.app.service.IAppointmentService;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private IAppointmentService appointmentService;

    
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentDto appointment) {
        Appointment savedAppointment = appointmentService.saveAppointment(appointment);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        Optional<Appointment> appointment = appointmentService.getAppointmentById(id);
        return appointment.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

   
    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        List<Appointment> appointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    
//    @PutMapping("/{id}")
//    public ResponseEntity<Appointment> updateAppointment(@PathVariable Long appointmentId, @RequestBody Appointment appointment) {
//        Optional<Appointment> existingAppointment = appointmentService.getAppointmentById(appointmentId);
//        if (existingAppointment.isPresent()) {
//            //appointment.setAppointmentId(appointmentId);
//            appointment.setAppointmentId(appointmentId);// Ensure the ID is set for the update
//            Appointment updatedAppointment = appointmentService.saveAppointment(appointment);
//            return ResponseEntity.ok(updatedAppointment);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        if (appointmentService.getAppointmentById(id).isPresent()) {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

   
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Appointment>> findAppointmentsByPatientId(@PathVariable Long patientId) {
        List<Appointment> appointments = appointmentService.findAppointmentsByPatientId(patientId);
        return ResponseEntity.ok(appointments);
    }

   
    @GetMapping("/doctor/{doctorName}")
    public ResponseEntity<List<Appointment>> findAppointmentsByDoctorId(@PathVariable Long doctorId) {
        List<Appointment> appointments = appointmentService.findAppointmentsByDoctorId(doctorId);
        return ResponseEntity.ok(appointments);
    }
}
