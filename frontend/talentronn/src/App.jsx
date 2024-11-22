import React from 'react'

 import { Routes,Route, Form } from "react-router-dom";
import Contact from './pages/Contact';
import Root from './pages/Root';
import TrainingProgram from './pages/TrainingProgram';
import TrainingPartner from './pages/TrainingPartner';
import About from './pages/About';

import Navbar from './components/navbar';
import Form4  from './components/form';

import Footer from './components/Footer';

function App() {
  return (
    <>   
    <Navbar/>
    <Routes>
        <Route path="/" element={<Root />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/TrainingProgram" element={<TrainingProgram />} /> 
        <Route path="/TrainingPartner" element={<TrainingPartner />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Form4/>
    <Footer/>
    </>
  )
}

export default App
