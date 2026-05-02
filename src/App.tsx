import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MarsRoverPage from './pages/MarsRoverPage'
import NeoPage from './pages/NeoPage'
import EpicPage from './pages/EpicPage'
import NavBar from './components/Navbar'
import { ParticlesBackground } from './components/ParticlesBackground'
import { Footer } from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <ParticlesBackground />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mars-rover' element={<MarsRoverPage />} />
        <Route path='/neo' element={<NeoPage />} />
        <Route path='/epic' element={<EpicPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
