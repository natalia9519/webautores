// import React, { useState } from 'react';
// import logo from '../../assets/book.png'
// import './NavBar.css'
// import { Link } from 'react-router-dom';

// export default function NavBar() {

//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header className='section-navbar'>
//       <article className='article-navbar' >
//         <figure>
//         <Link to="/"> <img src={logo} alt="Logo de la pagina un libro con marcador" /></Link>
//         </figure>
//         <h2>Miguel García & Mariana Jiménez</h2>
//       </article>
//       <nav className='nav-styles'>
//         <div className='nav-desktop'>
//           <ul>
//           <li><Link to="/Libros">LIBROS</Link></li>
//               <li><Link to="/Autores">AUTORES</Link></li>
//               <li><Link to="/Eventos">EVENTOS</Link></li>
//           </ul>
//         </div>
//         <div className='hamburguer' onClick={toggleMenu}>
//           <i className="fas fa-bars nav-icon"/>
//           {showMenu && (
//             <ul>
//               <li><Link to="/Libros">LIBROS</Link></li>
//               <li><Link to="/Autores">AUTORES</Link></li>
//               <li><Link to="/Eventos">EVENTOS</Link></li>
//             </ul>
//           )}
//         </div>

//       </nav>

//     </header>
//   )
// }









import React, { useState,useEffect } from 'react';
import logo from '../../assets/book.png'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [role, setRole] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setRole(null);
    window.location.href = '/';
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    const userRole = localStorage.getItem('role');
    if (username && userRole) {
      setRole(userRole);
    }
  }, []);

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
        {role && (
          <div className='nav-links'>
            {role === 'user' && <Link to="/our-dream">Mi página</Link>}
            {role === 'admin' && <Link to="/user-manage">PANEL DE CONTROL </Link>}
            <button onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></button>
          </div>
        )}
      </nav>

    </header>
  )
}