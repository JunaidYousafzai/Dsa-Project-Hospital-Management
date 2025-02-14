package com.hospitalmanagement.controller;

import com.hospitalmanagement.model.Patient;
import com.hospitalmanagement.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }


    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientService.addPatient(patient);
    }


    @DeleteMapping
    public Patient removePatient() {
        return patientService.removePatient();
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }


    @GetMapping("/{patientId}")
    public Patient getPatientById(@PathVariable String patientId) {
        return patientService.getPatientById(patientId);
    }
}