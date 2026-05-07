import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { useState } from 'react'
import hamburgerIcon from '../assets/svg/hamburger-menu-svgrepo-com.svg'

export default function NavBar(){

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className='navbar-header'>
            <div className='navbar-header__title-container'>
                <h1 className='navbar-header__title'>SpaceExplorer</h1>
            </div>
            <nav className='navbar-header__nav'>
                <ul className={`navbar-header__link-container ${isOpen ? "navbar-header__link-container--open" : ""}`}>
                    <li><Link to="/" className="navbar-header__link" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                    <li><Link to="/nasa-gallery" className="navbar-header__link" onClick={() => setIsOpen(false)}>Galeria Nasa</Link></li>
                    <li><Link to="/epic" className="navbar-header__link" onClick={() => setIsOpen(false)}>Epic</Link></li>
                    <li><Link to="/neo" className="navbar-header__link" onClick={() => setIsOpen(false)}>Neo</Link></li>
                </ul>
            </nav>
            <img className='navbar-header__hamburger' width={32} height={32} src={hamburgerIcon} onClick={ () => setIsOpen(!isOpen)} />
        </header>
    )
}