package com.app.entities;

public class Clinic {
//	Clinic ID (primary key)
//	Name
//	Address
//	Phone Number (optional)
	private int ClinicId;
	private String clinicName ;
	private String clinicAddress;
	private int clinicPhone;
	
	public Clinic() {}
	
	public Clinic(int clinicId, String clinicName, String clinicAddress, int clinicPhone) {
		super();
		ClinicId = clinicId;
		this.clinicName = clinicName;
		this.clinicAddress = clinicAddress;
		this.clinicPhone = clinicPhone;
	}
	@Override
	public String toString() {
		return "Clinic [ClinicId=" + ClinicId + ", clinicName=" + clinicName + ", clinicAddress=" + clinicAddress
				+ ", clinicPhone=" + clinicPhone + "]";
	}
	public int getClinicId() {
		return ClinicId;
	}
	public void setClinicId(int clinicId) {
		ClinicId = clinicId;
	}
	public String getClinicName() {
		return clinicName;
	}
	public void setClinicName(String clinicName) {
		this.clinicName = clinicName;
	}
	public String getClinicAddress() {
		return clinicAddress;
	}
	public void setClinicAddress(String clinicAddress) {
		this.clinicAddress = clinicAddress;
	}
	public int getClinicPhone() {
		return clinicPhone;
	}
	public void setClinicPhone(int clinicPhone) {
		this.clinicPhone = clinicPhone;
	}
	
	
}
