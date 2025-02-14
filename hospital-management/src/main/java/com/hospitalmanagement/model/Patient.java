package com.hospitalmanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {
    @Id
    private String patientId;
    private String name;
    private int age;
    private String contactInfo;
    private String medicalHistory;

    // Constructors, getters, and setters
    public Patient() {}

    public Patient(String patientId, String name, int age, String contactInfo, String medicalHistory) {
        this.patientId = patientId;
        this.name = name;
        this.age = age;
        this.contactInfo = contactInfo;
        this.medicalHistory = medicalHistory;
    }

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getContactInfo() { return contactInfo; }
    public void setContactInfo(String contactInfo) { this.contactInfo = contactInfo; }

    public String getMedicalHistory() { return medicalHistory; }
    public void setMedicalHistory(String medicalHistory) { this.medicalHistory = medicalHistory; }
}