import React from 'react';
import '../styles/Header.css'; // Ajustado para importar desde la carpeta styles

function Header() {
  return (
    <header className="header">
      <h1>Monster Hunter Build Creator</h1>
      <div className="settings-icon">⚙️</div>
    </header>
  );
}

export default Header;
