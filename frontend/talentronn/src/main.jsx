import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <App />
</BrowserRouter>, 
)