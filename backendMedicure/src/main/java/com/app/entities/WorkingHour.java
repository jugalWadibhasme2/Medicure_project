package com.app.entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "workingHours")
public class WorkingHour {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

@Column(name="start_name")
    private Time startTime;

@Column(name="end_name")
    private Time endTime;
    
@Column(name="day_of_week",nullable=false)    
    private String dayOfWeek;
}
