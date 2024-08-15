package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Patient;

public interface IPatientRepo extends JpaRepository<Patient, Integer> {

    boolean exsistByID(int patientID);

    Optional <Patient>FindById(int patientID);

}
