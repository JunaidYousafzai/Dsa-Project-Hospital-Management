package com.hospitalmanagement.service;

import com.hospitalmanagement.model.Patient;
import com.hospitalmanagement.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedList;

@Service
public class PatientService {
    private final PatientStack patientStack;
    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientStack patientStack, PatientRepository patientRepository) {
        this.patientStack = patientStack;
        this.patientRepository = patientRepository;
    }


    public Patient addPatient(Patient patient) {
        patientStack.push(patient); 
        return patientRepository.save(patient); 
    }

   
    public Patient removePatient() {
        Patient patient = patientStack.pop(); 
        patientRepository.delete(patient);
        return patient;
    }


    public LinkedList<Patient> getAllPatients() {
        return patientStack.getAllPatients();
    }

public Patient getPatientById(String patientId) {
    return patientRepository.findByPatientId(patientId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Patient not found"));
}
}