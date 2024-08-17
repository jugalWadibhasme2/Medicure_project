package com.app.service;

import com.app.entities.Doctor;

import java.util.List;
import java.util.Optional;

public interface DoctorService {

    
    Doctor saveDoctor(Doctor doctor);

    
    Optional<Doctor> getDoctorById(Long id);

    
    List<Doctor> getAllDoctors();

    
    void deleteDoctor(Long id);

    
    List<Doctor> findDoctorsByName(String name);
}
