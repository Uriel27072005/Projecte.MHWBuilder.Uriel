const API_BASE_URL = 'https://mhw-db.com';

export const getWeapons = async () => {
  const response = await fetch(`${API_BASE_URL}/weapons`);
  return await response.json();
};

export const getHelmets = async () => {
  const response = await fetch(`${API_BASE_URL}/helmets`); // Ajusta la URL según la API
  return await response.json();
};

export const getChestpieces = async () => {
  const response = await fetch(`${API_BASE_URL}/chestpieces`); // Ajusta la URL según la API
  return await response.json();
};

export const getGloves = async () => {
  const response = await fetch(`${API_BASE_URL}/gloves`); // Ajusta la URL según la API
  return await response.json();
};

export const getCoats = async () => {
  const response = await fetch(`${API_BASE_URL}/coats`); // Ajusta la URL según la API
  return await response.json();
};

export const getLeggings = async () => {
  const response = await fetch(`${API_BASE_URL}/leggings`); // Ajusta la URL según la API
  return await response.json();
};

export const getCigars = async () => {
  const response = await fetch(`${API_BASE_URL}/cigars`); // Ajusta la URL según la API
  return await response.json();
};

export const getConsumables = async () => {
  const response = await fetch(`${API_BASE_URL}/consumables`); // Ajusta la URL según la API
  return await response.json();
};
