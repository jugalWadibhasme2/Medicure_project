package com.app.entities;

import javax.persistence.*;
import com.app.Enum.Role;
import java.util.List;

@Entity
@Table(name = "Doctors")
public class Doctor extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Long doctorId; // Ensure this matches your database schema

    @Column(name = "doctor_name", nullable = false)
    private String doctorName;

    @Column(name = "qualification", nullable = false)
    private String qualification;

    @Column(name = "availability", nullable = false)
    private String availability;

    @OneToMany(mappedBy = "doctor", fetch = FetchType.EAGER)
    private List<Appointment> doctorAppointments;

    @OneToOne(mappedBy = "doctor", cascade = CascadeType.ALL, orphanRemoval = true)
    private Schedule schedule;

    // Getters and Setters

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public List<Appointment> getDoctorAppointments() {
        return doctorAppointments;
    }

    public void setDoctorAppointments(List<Appointment> doctorAppointments) {
        this.doctorAppointments = doctorAppointments;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }
}
