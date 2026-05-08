🚀 SpaceExplorer
Aplicación web que consume las APIs reales de la NASA para explorar el universo desde el navegador.

🌌 Demo
Ver en Vercel

📸 Páginas
Inicio — Imagen Astronómica del Día (APOD) con título y descripción
NASA Gallery — Galería de imágenes históricas de la NASA con buscador
EPIC — Fotos de la Tierra desde el satélite DSCOVR
NEO — Asteroides cercanos a la Tierra con indicador de peligrosidad

🛠️ Stack
React 19 · TypeScript · React Router · CSS puro con BEM · Vite · Vercel

📁 Estructura
src/api/ — Funciones fetch para cada API
src/components/ — Navbar, Footer, ParticlesBackground
src/hooks/ — Custom hooks: useApod, useEpic, useNeo, useNasaImages
src/pages/ — Una página por sección
src/styles/ — Archivos CSS con metodología BEM
src/types/ — Interfaces TypeScript para las respuestas de la API

🔑 Variables de entorno
Crea un archivo .env en la raíz del proyecto:
VITE_NASA_API_KEY=tu_api_key_aqui
Consigue tu API key gratuita en https://api.nasa.gov

🚀 Instalación
npm install
npm run dev

🧪 Tests
npm test

📡 APIs utilizadas
NASA APOD — https://api.nasa.gov
NASA EPIC — https://epic.gsfc.nasa.gov
NASA NeoWs — https://api.nasa.gov
NASA Image and Video Library — https://images.nasa.gov
