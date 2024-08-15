package com.app.service;

public interface DoctorService {
    
    DoctorSignup doctorRegistration(DoctorSignup reqDTO);
	
	List<DoctorDto> displayAllDoctor();
	
	void deleteDoctor(Long id);
	
	DoctorDto updateDoctor(Long id,DoctorDto updateDoctor);
}
