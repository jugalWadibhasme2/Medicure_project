package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "TimeSlots")
public class TimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int timeSlotId;

    @Column(name = "Start_time", nullable = false)
    private Date startTime;

    @Column(name = "End_time", nullable = false)
    private Date endTime;

    @OneToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

    // Getters and Setters
}
