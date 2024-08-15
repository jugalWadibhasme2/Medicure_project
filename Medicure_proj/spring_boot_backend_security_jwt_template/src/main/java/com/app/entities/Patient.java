package com.app.entities;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CascadeType;

import com.app.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@ToString
@Table(name="Patients")
public class Patient extends User {
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
    private String patienttName;

@Column(name="patient_dob")
    private Date dob;

@Column(name="patient_num", nullable= false)
    private int phoneNo;

@Column(name="patient_email",nullable=false)
    private String email;

@Enumerated(EnumType.STRING)
    private Role role=Role.PATIENT;

// @OneToMany(cascade = CascadeType.ALL)
// @JoinColumn(name="appointmentId")
//     private int appointment;
}
