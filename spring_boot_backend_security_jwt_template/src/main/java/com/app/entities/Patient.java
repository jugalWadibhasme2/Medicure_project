package com.app.entities;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CascadeType;

public class Patient {
//	patientID: int (PK)
//	  + name: String
//	  + dateOfBirth: Date
//	  + address: String
//	  + phoneNumber: String
//	  + email: String (optional)
//	  + appointments: List<Appointment>
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int patientId;

    @Column(name="Patient_name")
    private String pateintName;
    
    private Date dob;
    private int phoneNo;
    
    private String email;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="appointment")
    private int appointment
}
