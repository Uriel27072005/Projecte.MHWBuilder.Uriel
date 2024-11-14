import React from 'react';
import './EquipmentItem.css'; // Esto está bien, ya que EquipmentItem.css está en la misma carpeta

function EquipmentItem({ item }) {
  return (
    <div className="equipment-item">
      <h3>{item.nombre_item}</h3>
      <p>Tipo: {item.tipo_item}</p>
      <p>Rareza: {item.rareza}</p>
    </div>
  );
}

export default EquipmentItem;
