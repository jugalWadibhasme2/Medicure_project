package com.app.controller;

import com.app.entities.Doctor;
import com.app.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    
    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorService.saveDoctor(doctor);
        return new ResponseEntity<>(savedDoctor, HttpStatus.CREATED);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        Optional<Doctor> doctor = doctorService.getDoctorById(id);
        return doctor.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    
    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok(doctors);
    }

    
    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        Optional<Doctor> existingDoctor = doctorService.getDoctorById(id);
        if (existingDoctor.isPresent()) {
            doctor.setDoctorId(id); // Ensure the ID is set for the update
            Doctor updatedDoctor = doctorService.saveDoctor(doctor);
            return ResponseEntity.ok(updatedDoctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
        if (doctorService.getDoctorById(id).isPresent()) {
            doctorService.deleteDoctor(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

   
    @GetMapping("/name/{name}")
    public ResponseEntity<List<Doctor>> findDoctorsByName(@PathVariable String name) {
        List<Doctor> doctors = doctorService.findDoctorsByName(name);
        return ResponseEntity.ok(doctors);
    }

    
//    @GetMapping("/qualification/{qualification}")
//    public ResponseEntity<List<Doctor>> findDoctorsByQualification(@PathVariable String qualification) {
//        List<Doctor> doctors = doctorService.findDoctorsByQualification(qualification);
//        return ResponseEntity.ok(doctors);
//    }

//    @GettMapping("/availability/{availability}")
//    public ResponseEntity<List<Doctor>> findDoctorsByAvailability(@PathVariable String availability) {
//        List<Doctor> doctors = doctorService.findDoctorsByAvailability(availability);
//        return ResponseEntity.ok(doctors);
//    }
}
