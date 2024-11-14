// src/App.js

import React from 'react';
import Header from './components/Header';
import ItemCategories from './components/ItemCategories';
import Filters from './components/Filters';
import Statistics from './components/Statistics';  // Importa el componente

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ItemCategories />
        <Filters />
        <Statistics /> {/* Muestra las estadísticas aquí */}
      </div>
    </div>
  );
}

export default App;
