const baseUrl = 'https://dragonball-api.com/api/characters?limit=4&page=1';

async function obtenerPersonajes() {
  const container = document.getElementById('characters');
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();

    // Acceder a la propiedad 'items' que contiene el array de personajes
    data.items.forEach(personaje => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h3>${personaje.name}</h3>
        <p>Raza: ${personaje.race}</p>
        <p>KI: ${personaje.ki}</p>
        <p>Afiliación: ${personaje.affiliation}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Hubo un problema al cargar los datos: ${error.message}</p>`;
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', obtenerPersonajes);
