import React, { useState } from 'react';
import logo from '../../assets/book.png'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='section-navbar'>
      <article className='article-navbar' >
        <figure>
        <Link to="/"> <img src={logo} alt="Logo de la pagina un libro con marcador" /></Link>
        </figure>
        <h2>Miguel García & Mariana Jiménez</h2>
      </article>
      <nav className='nav-styles'>
        <div className='nav-desktop'>
          <ul>
          <li><Link to="/Libros">LIBROS</Link></li>
              <li><Link to="/Autores">AUTORES</Link></li>
              <li><Link to="/Eventos">EVENTOS</Link></li>
          </ul>
        </div>
        <div className='hamburguer' onClick={toggleMenu}>
          <i className="fas fa-bars nav-icon"/>
          {showMenu && (
            <ul>
              <li><Link to="/Libros">LIBROS</Link></li>
              <li><Link to="/Autores">AUTORES</Link></li>
              <li><Link to="/Eventos">EVENTOS</Link></li>
            </ul>
          )}
        </div>

      </nav>

    </header>
  )
}
