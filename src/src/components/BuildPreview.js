import React from 'react';
import '../styles/BuildPreview.css'; // Importa el CSS correspondiente

function BuildPreview({ build }) {
  return (
    <div className="build-preview">
      <h2>Vista Previa de Build</h2>
      <ul>
        {build && build.items && build.items.length > 0 ? (
          build.items.map((item, index) => (
            <li key={index}>{item.nombre_item}</li>
          ))
        ) : (
          <li>No hay items en la build.</li>
        )}
      </ul>
    </div>
  );
}

export default BuildPreview;
