import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllPatients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/patients');
            setPatients(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching patients');
            setLoading(false);
        }
    };


    const removeRecentPatient = async () => {
        try {
            await axios.delete('http://localhost:8080/api/patients'); 
            fetchPatients(); 
        } catch (err) {
            alert('Failed to remove the last patient');
        }
    };

    if (loading) return <div>Loading patients...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='container mx-auto px-4'>
            <div className="max-w-6xl mx-auto my-10 p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center">All Patients</h2>

                {/* Remove Recent Patient Button */}
                <div className="flex justify-center my-4">
                    <button
                        onClick={removeRecentPatient}
                        className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
                    >
                        Remove Recent Patient
                    </button>
                </div>

                {/* Patients Table */}
                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left border-b">Patient ID</th>
                                <th className="px-4 py-2 text-left border-b">Name</th>
                                <th className="px-4 py-2 text-left border-b">Age</th>
                                <th className="px-4 py-2 text-left border-b">Contact Info</th>
                                <th className="px-4 py-2 text-left border-b">Medical History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.patientId} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border-b">{patient.patientId}</td>
                                    <td className="px-4 py-2 border-b">{patient.name}</td>
                                    <td className="px-4 py-2 border-b">{patient.age}</td>
                                    <td className="px-4 py-2 border-b">{patient.contactInfo}</td>
                                    <td className="px-4 py-2 border-b">{patient.medicalHistory || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewAllPatients;
