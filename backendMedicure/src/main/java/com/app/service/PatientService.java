package com.app.service;

import com.app.entities.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientService {

    
    Patient savePatient(Patient patient);

    
    Optional<Patient> getPatientById(int id);

    
    List<Patient> getAllPatients();

    
    void deletePatient(int id);

    
    List<Patient> findPatientsByFirstName(String firstName);

    
    List<Patient> findPatientsByLastName(String lastName);
}
