package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "Schedules")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id")
    private int scheduleId;

    @OneToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @Column(name = "working_days", nullable = false)
    private String workingDays;

    @Column(name = "working_hours", nullable = false)
    private String workingHours;

    // Getters and Setters
}
