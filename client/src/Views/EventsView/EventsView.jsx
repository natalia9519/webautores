import React from 'react'
import './EventsView.css'
import CardEvents from '../../Components/CardEvents/CardEvents'
import { Link } from 'react-router-dom';
import logo from '../../assets/book.png'


export default function EventsView() {
  return (
    <main>
      <CardEvents />
     
     <section className='section-logo-login'> <Link to='/start-our-dream'><img src={logo} alt="logo de la pagina" className='login-point'/></Link>
</section>
    </main>
  )
}
