import React from "react";
import "./App.css";


import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPatient from "./pages/AddPatient";
import About from "./pages/About";
import ViewAllPatients from "./pages/ViewAllPatient";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patients" element={<ViewAllPatients />} />
      </Routes>
    </>
  );
}

export default App;
