import React, { useState, useEffect } from 'react';
import './HomeView.css';
import { Link } from 'react-router-dom';
import author from '../../assets/work.png'
import books from '../../assets/book-not-found.png'
import bookfair from '../../assets/feria1.jpg'

export default function HomeView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://webautores.onrender.com/event/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, events.length]);

  return (
    <main className='main-home-view'>
      <h1 className='h1-home-view'><i>Las palabras son la llave de nuevos mundos a los que poder viajar juntos o sin compañía.</i></h1>
      <div className="banner">
        {events.map((event, index) => (
          <div key={index} className={`banner-item ${index === currentIndex ? 'active' : ''}`}>
            <div className="banner-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{event.places} {event.date}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="image-buttons">
        <Link to='/libros' className="image-button">
          <img src={books} alt="Image 1" />
        </Link>        
        <Link to='/autores' className="image-button">
          <img src={author} alt="Image 1" />
        </Link>
        <Link to='/eventos' className="image-button">
          <img src={bookfair} alt="Image 1" />
        </Link>
      </section>
    </main>
  );
}