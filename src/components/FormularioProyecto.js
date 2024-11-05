
import React, { useState, useEffect } from 'react';

const FormularioProyecto = ({ onSubmit, proyecto }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (proyecto) {
      setTitulo(proyecto.titulo);
      setDescripcion(proyecto.descripcion);
    }
  }, [proyecto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, descripcion });
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div className="form-group mt-2">
        <label>Descripción</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {proyecto ? 'Actualizar Proyecto' : 'Crear Proyecto'}
      </button>
    </form>
  );
};

export default FormularioProyecto;
