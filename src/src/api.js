// api.js

export const getWeapons = async () => {
  const response = await fetch('https://api.example.com/weapons');
  if (!response.ok) {
    throw new Error('No se pudieron obtener las armas');
  }
  return await response.json();
};

export const getHelmets = async () => {
  const response = await fetch('https://api.example.com/helmets');
  if (!response.ok) {
    throw new Error('No se pudieron obtener los cascos');
  }
  return await response.json();
};

export const getChestpieces = async () => {
  const response = await fetch('https://api.example.com/chestpieces');
  if (!response.ok) {
    throw new Error('No se pudieron obtener las pecheras');
  }
  return await response.json();
};

export const getGloves = async () => {
  const response = await fetch('https://api.example.com/gloves');
  if (!response.ok) {
    throw new Error('No se pudieron obtener los guantes');
  }
  return await response.json();
};

export const getCoats = async () => {
  const response = await fetch('https://api.example.com/coats');
  if (!response.ok) {
    throw new Error('No se pudieron obtener las cotas');
  }
  return await response.json();
};

export const getLeggings = async () => {
  const response = await fetch('https://api.example.com/leggings');
  if (!response.ok) {
    throw new Error('No se pudieron obtener las piernas');
  }
  return await response.json();
};

export const getCigars = async () => {
  const response = await fetch('https://api.example.com/cigars');
  if (!response.ok) {
    throw new Error('No se pudieron obtener las cigarras');
  }
  return await response.json();
};

export const getConsumables = async () => {
  const response = await fetch('https://api.example.com/consumables');
  if (!response.ok) {
    throw new Error('No se pudieron obtener los consumibles');
  }
  return await response.json();
};
