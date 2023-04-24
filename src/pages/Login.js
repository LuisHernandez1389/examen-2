import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/persona', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const usuario = data.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
        if (usuario) {
          onLogin(true); // llamada a la función onLogin
        } else {
          onLogin(false); // llamada a la función onLogin
        }
      })
      .catch(error => {
        // Manejar errores
        console.error('There was an error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input type="text" value={correo} onChange={(event) => setCorreo(event.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={contraseña} onChange={(event) => setContraseña(event.target.value)} />
      </label>
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginPage;