import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';

import {Grid} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';



function App() {
  return(
    <Router>
    <Navbar />
    <Routes> 
    {/*<Route path="/" element={<Login />} /> 
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
   {/* <Route path="/cadastro" element={<CadastroUsuario />} /> // Ativar depois de criar as págs Login e Cadastro*/}

    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    <Footer />
    </Router>
    
  );
}

export default App;
