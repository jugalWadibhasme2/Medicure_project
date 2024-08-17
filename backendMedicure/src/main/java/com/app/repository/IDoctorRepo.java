package com.app.repository;

import com.app.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IDoctorRepo extends JpaRepository<Doctor, Long> {

   
    List<Doctor> findByDoctorNameContainingIgnoreCase(String name);
}
