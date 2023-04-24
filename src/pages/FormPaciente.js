import React, { useState, useEffect } from "react";

const FormPaciente = ({ paciente, onSave, onCancel }) => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    curp: "",
    edad: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  useEffect(() => {
    if (paciente) {
      setValues(paciente);
    }
  }, [paciente]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          value={values.apellido}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="curp" className="form-label">
          CURP
        </label>
        <input
          type="text"
          className="form-control"
          id="curp"
          name="curp"
          value={values.curp}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad
        </label>
        <input
          type="number"
          className="form-control"
          id="edad"
          name="edad"
          value={values.edad}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          name="direccion"
          value={values.direccion}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          name="telefono"
          value={values.telefono}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="correo"
          name="correo"
          value={values.correo}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary me-2">
          Guardar
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormPaciente;