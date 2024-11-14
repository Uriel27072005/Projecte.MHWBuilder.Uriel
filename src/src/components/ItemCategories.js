// ItemCategories.js
import React, { useState } from 'react';
import { 
  getWeapons, 
  getHelmets, 
  getChestpieces, 
  getGloves, 
  getCoats, 
  getLeggings, 
  getCigars, 
  getConsumables 
} from '../api'; // Asegúrate de que estos están correctamente definidos en api.js
import '../styles/ItemCategories.css';

const ItemCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (category) => {
    setLoading(true);
    setError(null);
    try {
      let items;
      switch (category) {
        case 'weapons':
          items = await getWeapons();
          break;
        case 'helmets':
          items = await getHelmets();
          break;
        case 'chestpieces':
          items = await getChestpieces();
          break;
        case 'gloves':
          items = await getGloves();
          break;
        case 'coats':
          items = await getCoats();
          break;
        case 'leggings':
          items = await getLeggings();
          break;
        case 'cigars':
          items = await getCigars();
          break;
        case 'consumables':
          items = await getConsumables();
          break;
        default:
          throw new Error('Categoría desconocida');
      }
      setData(items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setData([]);
    } else {
      setActiveCategory(category);
      fetchData(category);
    }
  };

  return (
    <div className="item-categories">
      <h2>Categorías de Items</h2>
      <ul>
        <li onClick={() => handleClick('weapons')}>1. Todas las Armas</li>
        <li onClick={() => handleClick('helmets')}>2. Todos los Cascos</li>
        <li onClick={() => handleClick('chestpieces')}>3. Todas las Pecheras</li>
        <li onClick={() => handleClick('gloves')}>4. Todos los Guantes</li>
        <li onClick={() => handleClick('coats')}>5. Todas las Cotas</li>
        <li onClick={() => handleClick('leggings')}>6. Todas las Piernas</li>
        <li onClick={() => handleClick('cigars')}>7. Todas las Cigarras</li>
        <li onClick={() => handleClick('consumables')}>8. Objetos Consumibles</li>
      </ul>
      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>}
      {activeCategory && (
        <div className="item-list">
          <h3>{activeCategory}</h3>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li> // Ajusta según la estructura de tus datos
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemCategories;
