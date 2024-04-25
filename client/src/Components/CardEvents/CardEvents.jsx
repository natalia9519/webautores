import React, { useState, useEffect } from 'react';
import './CardEvents.css';

export default function CardEvents() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('asc'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/event/events");
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (order === 'asc') {
      setData(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else {
      setData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  }, [order, data]); 

  const handleOrderChange = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc'); 
  };

  return (
    
      <section className="section-card-event">
      <button onClick={handleOrderChange} className='btn-card-event'>Ordenar por fecha</button> 

        {data.map((event) => (
          <article key={event.id} className="article-card-event">
            <h4>{event.title}</h4>
            <p>{event.author}</p>
            <p>{event.places}</p>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </article>
        ))}
      </section>
    
  );
}