# 🚀 SpaceExplorer

Aplicación web que consume las APIs reales de la NASA para explorar el universo desde el navegador.

🌌 [Ver demo en Vercel](https://space-explorer-livid.vercel.app)  
💻 [Repositorio en GitHub](https://github.com/dannijl88/space-explorer)

---

## 📸 Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | HomePage | Imagen Astronómica del Día (APOD) con título y descripción |
| `/nasa-gallery` | NasaGalleryPage | Galería de imágenes históricas con buscador |
| `/epic` | EpicPage | Fotos de la Tierra desde el satélite DSCOVR |
| `/neo` | NeoPage | Asteroides cercanos con indicador de peligrosidad |

---

## 🛠️ Stack

- **React 19** + **TypeScript**
- **React Router** — navegación entre páginas
- **Vite** — bundler y servidor de desarrollo
- **CSS puro con metodología BEM**
- **tsparticles** — fondo de partículas animado
- **Vitest** + **React Testing Library** — tests unitarios
- **Vercel** — despliegue continuo

---

## 📁 Estructura
src/
├── api/          # Funciones fetch para cada API de la NASA
├── components/   # Navbar, Footer, ParticlesBackground
├── hooks/        # Custom hooks: useApod, useEpic, useNeo, useNasaImages
├── pages/        # Una página por sección
├── styles/       # Archivos CSS con metodología BEM
└── types/        # Interfaces TypeScript para las respuestas de la API

---

## 🧪 Tests

El proyecto incluye tests unitarios para todos los custom hooks con mocking de fetch.

```bash
npm test
```

Hooks testeados: `useApod` · `useNasaImages` · `useEpic` · `useNeo`

Cada hook tiene tests para tres escenarios: carga, éxito y error.

---

## 🔑 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:
VITE_NASA_API_KEY=tu_api_key_aqui

Consigue tu API key gratuita en [api.nasa.gov](https://api.nasa.gov)

---

## 🚀 Instalación

```bash
npm install
npm run dev
```

---

## 📡 APIs utilizadas

- [NASA APOD](https://api.nasa.gov) — Imagen astronómica del día
- [NASA EPIC](https://epic.gsfc.nasa.gov) — Fotos de la Tierra desde satélite
- [NASA NeoWs](https://api.nasa.gov) — Asteroides cercanos a la Tierra
- [NASA Image and Video Library](https://images.nasa.gov) — Galería de imágenes históricas
