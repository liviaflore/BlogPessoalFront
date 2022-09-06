import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


import {Grid} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';




function App() {
  return(
    <Router>
     <Navbar />
     <div style={{ minHeight: '100vh' }}>
     <Routes> 

       <Route path="/" element={<Login />} /> 
       <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} />
       <Route path="/cadastrousuario" element={<CadastroUsuario />} />
       <Route path="/temas" element={<ListaTema />} />
       <Route path="/posts" element={<ListaPostagem />} />


   {/* <Route path="*" element={<NotFound />} /> // Ativar depois de criar a pág de Not Found*/}
     </Routes>
     
     </div>
     <Footer />

    </Router>
    
  );
}

export default App;
