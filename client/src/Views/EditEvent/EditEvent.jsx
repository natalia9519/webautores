import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditEvent() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
  
    useEffect(() => {
      const fetchEvent = async () => {
        try {
          const response = await fetch(`https://webautores.onrender.com/event/events/${id}`);
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          setEvent(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEvent();
    }, [id]);
  
    const handleChange = (e) => {
      setEvent({ ...event, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://webautores.onrender.com/event/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });
        if (!response.ok) {
          throw new Error('Error al actualizar los datos');
        }
        navigate('/our-dream');
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <main className="main-edit-reserve">
    <section className="section-table-book">
      <h2 className="section-edit-h2">Editar libro</h2>
      <form onSubmit={handleSubmit} className="form-table-book">
        <input
          type="text"
          name="title"
          value={event.title || ''}
          onChange={handleChange}
          placeholder="Nombre del evento"
        />
        <br />
        <input
          type="text"
          name="author"
          value={event.author || ''}
          onChange={handleChange}
          placeholder="Autor que participa"
        />
        <br />
        <input
          type="text"
          name="places"
          value={event.places || ''}
          onChange={handleChange}
          placeholder="Lugar del evento"
        />
        <br />
        <input
          type="text"
          name="description"
          value={event.description || ''}
          onChange={handleChange}
          placeholder="Descripción del evento"
        />
        <br />
        <input
          type="date"
          name="date"
          value={event.date || ''}
          onChange={handleChange}
          placeholder="Día del evento"
        />
        <br />

        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </section>
    </main>
  )
}
