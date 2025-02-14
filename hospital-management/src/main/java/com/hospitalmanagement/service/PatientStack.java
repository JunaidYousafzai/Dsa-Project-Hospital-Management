package com.hospitalmanagement.service;

import org.springframework.stereotype.Component;
import com.hospitalmanagement.model.Patient;
import java.util.LinkedList;

@Component 
public class PatientStack {
    private LinkedList<Patient> stack;

    public PatientStack() {
        stack = new LinkedList<>();
    }


    public void push(Patient patient) {
        stack.addLast(patient);
    }


    public Patient pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.removeLast();
    }


    public Patient peek() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.getLast();
    }


    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public int size() {
        return stack.size();
    }


    public LinkedList<Patient> getAllPatients() {
        return new LinkedList<>(stack); 
    }
}