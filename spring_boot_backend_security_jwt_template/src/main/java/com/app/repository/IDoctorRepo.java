package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Doctor;

public interface IDoctorRepo extends JpaRepository<Doctor, Integer> {
        
    boolean  exsitsbyId(int doctorID);
    Optional<Doctor> findById(int doctorID);
}
