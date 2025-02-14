import React from 'react'
import BlurText from "../components/BlurText";
import AnimatedContent from "../components/AnimatedContent";
import { useNavigate } from "react-router-dom";

export const Home = () => {
const navigate = useNavigate()

  const handleAddPatientClick = () => {
    navigate("/add-patient"); 
  };

  return (
   <>


 <div className="w-full min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hospital Management System
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Efficiently manage patient records using a stack-based system.
            Built with React, Java, and MongoDB.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button  onClick={handleAddPatientClick} className="  px-6 py-2 rounded-md text-lg hover:bg-green-700 transition">
              Add Patient
            </button>
            <button className="bg-transparent border border-green-600 text-green-600 px-6 py-2 rounded-md text-lg hover:bg-green-600 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/images/hospital-dashboard.png" alt="Hospital Dashboard" className="w-full h-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
  
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Stack-Based Patient Management</h3>
            <p className="text-gray-600 mt-2">Efficiently manage patient records using custom stack logic.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Real-Time Data Updates</h3>
            <p className="text-gray-600 mt-2">Instantly update and retrieve patient data using our optimized API.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Secure & Scalable</h3>
            <p className="text-gray-600 mt-2">Built with security best practices and designed for scalability.</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2">Have questions? Reach out to us for more information.</p>
          <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-md text-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>

   </>

  )
}
export default  Home
