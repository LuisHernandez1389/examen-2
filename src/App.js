import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import ListaPaciente from './pages/ListaPaciente';
import Registrar from './pages/Registrar';
import Navegation from './components/Navegation';
  import RegistrarDoctor from './pages/RegistrarDoctor';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login') === 'true');

  function handleLogin(loginValue) {
    setIsLoggedIn(loginValue);
    console.log('isLoggedIn:', loginValue); 
    localStorage.setItem('login', loginValue ? 'true' : 'false');
  }

  function requireAuth(location) {
    if (isLoggedIn) {
      return true;
    } else {
      return {
        pathname: "/login",
        state: { from: location }
      };
    }
  }

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Navegation isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/confidential" element={<ListaPaciente isLoggedIn={isLoggedIn} />} canActivate={requireAuth} />
            <Route path="registro" element={<Registrar/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/registrarDoctor" element={<RegistrarDoctor/>} />
            
          </Routes>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />
      )}
    </BrowserRouter>
  );
}

export default App;