// src/components/Statistics.js

import React, { useState } from 'react';
import '../styles/Statistics.css'; // Asegúrate de tener el archivo de estilos para este componente

function Statistics() {
  const [defense, setDefense] = useState(100); // Ejemplo: defensa inicial
  const [attack, setAttack] = useState(150);   // Ejemplo: ataque inicial
  const [health, setHealth] = useState(500);   // Ejemplo: salud inicial

  // Puedes actualizar estos valores con los datos de la API o desde un estado global

  return (
    <div className="statistics">
      <h2>Estadísticas</h2>
      <div className="stat-item">
        <span>Defensa:</span> <strong>{defense}</strong>
      </div>
      <div className="stat-item">
        <span>Ataque:</span> <strong>{attack}</strong>
      </div>
      <div className="stat-item">
        <span>Salud:</span> <strong>{health}</strong>
      </div>
      {/* Añade más estadísticas si es necesario */}
    </div>
  );
}

export default Statistics;
