import React, { useState, useEffect } from 'react';
import '../ViewAllBooks/ViewAllBooks.css';

export default function ViewAllComments() {
  const [datos, setDatos] = useState([]);

  // Función para obtener los datos de los eventos
  const fetchData = async () => {
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:8000/contact/contact");
=======
      const response = await fetch("https://webautores.onrender.com/contact/contact");
>>>>>>> develop
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
// Función para eliminar un comentario
  const deleteBlog = async (id) => {
    try {
<<<<<<< HEAD
      const response = await fetch(`http://localhost:8000/contact/${id}`, {
=======
      const response = await fetch(`https://webautores.onrender.com/contact/${id}`, {
>>>>>>> develop
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el comentario');
      }

      // Actualizar la lista de comentarios después de eliminar
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };
// Cargar los datos de los comentarios al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className='section-view-books'>
        <h2>Comentarios recibidos</h2>
        <article className='row'>
          <table className='table-view-books'>
            <thead className='table-primary'>
              <tr>
                <th> Nombre del usuario</th>
                <th className='table-responsive'>Email</th>
                <th className='table-responsive'>Asunto</th>
                <th className='table-responsive'>Mensaje</th>
                <th className='table-responsive'>Fecha del envío</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((id) => (
                <tr key={id.id}>
                  <td> {id.name} </td>
                  <td className='table-responsive'> {id.email} </td>
                  <td className='table-responsive'> {id.subject} </td>
                  <td className='table-responsive'> {id.message} </td>
                  <td className='table-responsive'> {id.createdAt} </td>
                  <td className="btn-table">
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
