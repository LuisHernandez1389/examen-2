import React from 'react'
import { Link } from 'react-router-dom';

const RouteApp = () => {

  function requireAuth({ login }) {
    // Verificar si el usuario inició sesión, por ejemplo:
    const isAuthenticated = login === true;
    return isAuthenticated ? null : <Link to="/login" />;
  }
  return (
    <div>
      rutas
      
    </div>
    
  )
}

export default RouteApp

