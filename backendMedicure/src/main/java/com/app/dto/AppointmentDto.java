package com.app.dto;

public class AppointmentDto {

    private Long appointmentId;
    private int patient;
    private Long doctor;

    // No-args constructor
    public AppointmentDto() {}

    // All-args constructor
    public AppointmentDto(Long appointmentId, int patient, Long doctor) {
        this.appointmentId = appointmentId;
        this.patient = patient;
        this.doctor = doctor;
    }

    // Getters and Setters
    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public int getPatient() {
        return patient;
    }

    public void setPatient(int patient) {
        this.patient = patient;
    }

    public Long getDoctor() {
        return doctor;
    }

    public void setDoctor(Long doctor) {
        this.doctor = doctor;
    }

    // Inner classes for PatientDto and DoctorDto

    public static class PatientDto {
        private int patientId;
        private String firstName;
        private String lastName;
        private String email;
        private String contactNumber;

        // No-args constructor
        public PatientDto() {}

        // All-args constructor
        public PatientDto(int patientId, String firstName, String lastName, String email, String contactNumber) {
            this.patientId = patientId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.contactNumber = contactNumber;
        }

        // Getters and Setters
        public int getPatientId() {
            return patientId;
        }

        public void setPatientId(int patientId) {
            this.patientId = patientId;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getContactNumber() {
            return contactNumber;
        }

        public void setContactNumber(String contactNumber) {
            this.contactNumber = contactNumber;
        }
    }

    public static class DoctorDto {
        private Long doctorId;
        private String doctorName;
        private String qualification;
        private String availability;

        // No-args constructor
        public DoctorDto() {}

        // All-args constructor
        public DoctorDto(Long doctorId, String doctorName, String qualification, String availability) {
            this.doctorId = doctorId;
            this.doctorName = doctorName;
            this.qualification = qualification;
            this.availability = availability;
        }

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
    }
}
