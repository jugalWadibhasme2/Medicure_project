package com.app.entities;

import java.util.Date;

public class TimeSlot {
//	+ timeSlotID: int (PK)
//	  + startTime: Time
//	  + endTime: Time
	
	private int timeSlotId;
	private Date startTime;
	private Date endTime;
	
	public TimeSlot() {}
	
	public TimeSlot(int timeSlotId, Date startTime, Date endTime) {
		super();
		this.timeSlotId = timeSlotId;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	
	public int getTimeSlotId() {
		return timeSlotId;
	}
	public void setTimeSlotId(int timeSlotId) {
		this.timeSlotId = timeSlotId;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	@Override
	public String toString() {
		return "TimeSlot [timeSlotId=" + timeSlotId + ", startTime=" + startTime + ", endTime=" + endTime + "]";
	}
	
	
	
	

}
