import React, { useState, useEffect } from 'react';
import './HomeView.css';

export default function HomeView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/event/events')
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
      <h1>Las palabras son la llave de nuevos mundos a los que poder viajar juntos o sin compañia.</h1>
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
        <Link to='/autores' className="image-button">
          <img src="image1.jpg" alt="Image 1" />
        </Link>
        <Link to='/autores' className="image-button">
          <img src="image1.jpg" alt="Image 1" />
        </Link>
        <Link to='/autores' className="image-button">
          <img src="image1.jpg" alt="Image 1" />
        </Link>
      </section>
    </main>
  );
}