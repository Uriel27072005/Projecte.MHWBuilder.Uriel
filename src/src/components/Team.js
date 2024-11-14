import React, { useEffect, useState } from 'react';
import { getWeapons } from '../api'; // Asegúrate de importar la función de API
import '../styles/Team.css';

function Team() {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const data = await getWeapons();
        setWeapons(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar armas: {error.message}</div>;

  return (
    <div className="team">
      <h2>Armas</h2>
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.id}>{weapon.name}</li> // Ajusta según la estructura de tus datos
        ))}
      </ul>
    </div>
  );
}

export default Team;
