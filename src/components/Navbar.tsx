import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavBar(){
    return (
        <header className='navbar-header'>
            <div className='navbar-header__title-container'>
                <h1 className='navbar-header__title'>SpaceExplorer</h1>
            </div>
            <nav className='navbar-header__nav'>
                <ul className='navbar-header__link-container'>
                    <li><Link to="/" className="navbar-header__link">Inicio</Link></li>
                    <li><Link to="/nasa-gallery" className="navbar-header__link">Galeria Nasa</Link></li>
                    <li><Link to="/epic" className="navbar-header__link">Epic</Link></li>
                    <li><Link to="/neo" className="navbar-header__link">Neo</Link></li>
                </ul>
            </nav>
        </header>
    )
}