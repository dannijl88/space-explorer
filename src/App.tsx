import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NeoPage from './pages/NeoPage'
import EpicPage from './pages/EpicPage'
import NavBar from './components/Navbar'
import { ParticlesBackground } from './components/ParticlesBackground'
import { Footer } from './components/Footer'
import NasaGalleryPage from './pages/NasaGalleryPage'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <ParticlesBackground />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nasa-gallery' element={<NasaGalleryPage />} />
        <Route path='/neo' element={<NeoPage />} />
        <Route path='/epic' element={<EpicPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
