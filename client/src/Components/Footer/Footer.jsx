import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <p><Link to="/Contactanos">Contáctanos</Link></p>
      <p>© 2024 Miguel García & Maria Jiménez Todos los derechos reservados</p>
    </footer>
  )
}
