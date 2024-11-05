
import React, { useState, useEffect } from 'react';
import { getProyectos, deleteProyecto, createProyecto, updateProyecto } from '../services/proyectosService';
import FormularioProyecto from './FormularioProyecto';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  useEffect(() => {
    cargarProyectos();
  }, []);

  const cargarProyectos = async () => {
    try {
      const response = await getProyectos();
      setProyectos(response.data);
    } catch (error) {
      console.error("Error al cargar los proyectos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProyecto(id);
      cargarProyectos(); 
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  const handleCreateOrUpdate = async (proyecto) => {
    try {
      if (proyectoSeleccionado) {
       
        await updateProyecto(proyectoSeleccionado.id, proyecto);
        setProyectoSeleccionado(null);
      } else {
        
        await createProyecto(proyecto);
      }
      cargarProyectos(); 
    } catch (error) {
      console.error("Error al guardar el proyecto:", error);
    }
  };

  const handleEdit = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  return (
    <div className="mt-4">
      <h2>Gestión de Proyectos</h2>
      
      {}
      <FormularioProyecto
        onSubmit={handleCreateOrUpdate}
        proyecto={proyectoSeleccionado}
      />

      {}
      <ul className="list-group mt-3">
        {proyectos.map((proyecto) => (
          <li key={proyecto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{proyecto.titulo}</strong>: {proyecto.descripcion}
            </span>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(proyecto)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(proyecto.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProyectos;
