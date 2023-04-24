import React, { useState, useEffect } from "react";
import FormPaciente from "./FormPaciente";

const ListaPaciente = () => {
  const [pacientes, setPacientes] = useState([]);
  const [editingPaciente, setEditingPaciente] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/paciente")
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
      });
  }, []);

  const handleEdit = (paciente) => {
    setEditingPaciente(paciente);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/paciente/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Eliminar el paciente de la lista
        setPacientes(pacientes.filter((paciente) => paciente.id !== id));
      });
  };

  const handleSave = (paciente) => {
    fetch(`http://localhost:5000/paciente/${paciente.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el paciente en la lista
        const index = pacientes.findIndex((p) => p.id === data.id);
        pacientes[index] = data;
        setPacientes([...pacientes]);
        setEditingPaciente(null);
      });
  };
  return (
    <div className="container">
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CURP</th>
            <th>Edad</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre}</td>
              <td>{paciente.apellido}</td>
              <td>{paciente.curp}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.direccion}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.correo}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-1"
                  onClick={() => handleEdit(paciente)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(paciente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingPaciente && (
        <FormPaciente
          paciente={editingPaciente}
          onSave={handleSave}
          onCancel={() => setEditingPaciente(null)}
        />
      )}
    </div>
  );
};

export default ListaPaciente;