import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../ViewAllBooks/ViewAllBooks.css';

export default function ViewAllEvents() {
  const [datos, setDatos] = useState([]);

  // Función para obtener los datos de los eventos
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/event/events");
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
// Función para eliminar un evento
  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/event/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el libro');
      }

      // Actualizar la lista de eventos después de eliminar
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };
// Cargar los datos de los eventos al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className='section-view-books'>
        <h2>Eventos de los autores</h2>
        <article className='row'>
          <table className='table-view-books'>
            <thead className='table-primary'>
              <tr>
                <th>Titulo del evento</th>
                <th className='table-responsive'>Autor</th>
                <th className='table-responsive'>Lugar del evento</th>
                <th className='table-responsive'>Descripción del evento</th>
                <th className='table-responsive'>Fecha del evento</th>
                <th>Actiones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((id) => (
                <tr key={id.id}>
                  <td> {id.title} </td>
                  <td className='table-responsive'> {id.author} </td>
                  <td className='table-responsive'> {id.places} </td>
                  <td className='table-responsive'> {id.description} </td>
                  <td className='table-responsive'> {id.date} </td>
                  <td className="btn-table">
                    <Link to={`/EditRooms/${id.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                    <button onClick={() => deleteBlog(id._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
