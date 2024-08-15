package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class TimeSlot {
//	+ timeSlotID: int (PK)
//	  + startTime: Time
//	  + endTime: Time
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int timeSlotId;
	
	@Column(name="Start_time", nullable=false)
	private Date startTime;
	@Column(name="End_time", nullable=false)
	private Date endTime;
	
	

}
