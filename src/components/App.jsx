import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Proyectos from './Proyectos';
import Skills from './Skills';
import Conoceme from './Conoceme';
import Contacto from './Contacto';
import Email from '../common/Email';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='proyectos' element={<Proyectos />}></Route>
        <Route path='skills' element={<Skills />}></Route>
        <Route path='conoceme' element={<Conoceme />}></Route>
        <Route path='contacto' element={<Contacto />}></Route>
      </Routes>
      <Email />
    </div>
  );
}

export default App;
