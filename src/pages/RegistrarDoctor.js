import React from "react";
import { useState } from "react";

const RegistrarDoctor = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    nombre: "",
    apellido: "",
    edad: "",
    categoria: "",
    telefono: "",
    acciones: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/doctor", {
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

  return (
    <div>
      <h2>Registrar Doctor</h2>
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

        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="categoria">Dirección:</label>
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
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
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
};

export default RegistrarDoctor;