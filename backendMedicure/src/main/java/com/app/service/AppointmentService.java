package com.app.service;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.app.dto.AppointmentDto;
//import com.app.entities.Appointment;
//import com.app.repository.IAppointmentRepo;
//
//@Service
public class AppointmentService {

    //@Autowired
//    private IAppointmentRepo appointmentRepository;
//
//    public AppointmentDto getAppointmentById(Long id) {
//        Optional<Appointment> enteredAppointment=appointmentRepository.findById(id);
//    	Appointment appointment = enteredAppointment.get();
//            
//        AppointmentDto.PatientDto patientDto = new AppointmentDto.PatientDto(
//            appointment.getPatient().getPatientId(),
//            appointment.getPatient().getFirstName(),
//            appointment.getPatient().getLastName(),
//            appointment.getPatient().getEmail(),
//            appointment.getPatient().getContactNumber()
//        );
//
//        AppointmentDto.DoctorDto doctorDto = new AppointmentDto.DoctorDto(
//            appointment.getDoctor().getDoctorId(),
//            appointment.getDoctor().getDoctorName(),
//            appointment.getDoctor().getQualification(),
//            appointment.getDoctor().getAvailability()
//        );
//
//        return new AppointmentDto(
//            appointment.getAppointmentId(),
//            patientDto,
//            doctorDto
//        );
//    }
}
