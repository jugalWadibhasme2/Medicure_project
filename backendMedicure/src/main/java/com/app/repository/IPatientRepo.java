package com.app.repository;

import com.app.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPatientRepo extends JpaRepository<Patient, Integer> {

    
    List<Patient> findByFirstNameContainingIgnoreCase(String firstName);

    
    List<Patient> findByLastNameContainingIgnoreCase(String lastName);
}
