import React from "react";
import { useState } from "react";
import RegistrarDoctor from "./RegistrarDoctor";
import { Link, redirect } from "react-router-dom";

const Registrar = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    nombre: "",
    apellido: "",
    curp: "",
    edad: "",
    direccion: "",
    telefono: "",
    correo: "",
    acciones: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/paciente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const redireccion = () => {
    return (
      <Link to="/confidential" ></Link>
    )
  };
  return (
    <div>
      <h2>Registrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="curp">CURP:</label>
        <input
          type="text"
          name="curp"
          value={formData.curp}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <br />
        <input onClick={redireccion}  type="submit" value="Registrar" />
      </form>
      <br />
      <RegistrarDoctor/>
    </div>
  );
};

export default Registrar;
