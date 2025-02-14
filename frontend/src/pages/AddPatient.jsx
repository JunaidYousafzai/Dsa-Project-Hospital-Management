import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
    const [patientId, setPatientId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const patientData = {
            patientId,
            name,
            age,
            contactInfo,
            medicalHistory,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/patients', patientData);
            setMessage(`Patient added successfully: ${response.data.name}`);
        } catch (error) {
            setMessage('Error adding patient');
        }
    };

    return (
        <div className="max-w-lg mx-auto  p-8 rounded-lg shadow-xl ">
            <h2 className="text-3xl font-bold text-center">Add New Patient</h2>
            <form onSubmit={handleSubmit} className="space-y-1 mt-6">
                <div>
                    <label className="block text-lg font-medium ">Patient ID</label>
                    <input
                        type="text"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium ">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium ">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium ">Contact Info</label>
                    <input
                        type="email"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium ">Medical History</label>
                    <textarea
                        value={medicalHistory}
                        onChange={(e) => setMedicalHistory(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Patient
                </button>
            </form>
            {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
        </div>
    );
};

export default AddPatient;
