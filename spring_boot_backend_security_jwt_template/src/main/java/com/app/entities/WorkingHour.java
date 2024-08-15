package com.app.entities;

import java.sql.Time;

import javax.persistence.Column;

public class WorkingHour {

@Column(name="start_name")
    private Time startTime;

@Column(name="end_name")
    private Time endTime;
    
@Column(name="day_of_week",nullable=false)    
    private String dayOfWeek;
}
