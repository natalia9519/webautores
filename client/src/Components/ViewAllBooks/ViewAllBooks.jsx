import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './ViewAllBooks.css';

export default function ViewAllBooks() {
  const [datos, setDatos] = useState([]);

  // Función para obtener los datos de los libros
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/book/books");
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
// Función para eliminar un libro
  const deleteBlog = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/book/${id}", {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el libro');
      }

      // Actualizar la lista de libros después de eliminar
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };
// Cargar los datos de los libros al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className='section-view-books'>
        <h2>Libros de los autores</h2>
        <article className='row'>
          <table className='table-view-books'>
            <thead className='table-primary'>
              <tr>
                <th>Titulo</th>
                <th className='table-responsive'>Autor</th>
                <th className='table-responsive'>Páginas del libro</th>
                <th className='table-responsive'>Editorial</th>
                <th className='table-responsive'>Año de publicación</th>
                <th className='table-responsive'>ISBN</th>
                <th>Actiones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((id) => (
                <tr key={id.id}>
                  <td> {id.title} </td>
                  <td className='table-responsive'> {id.author} </td>
                  <td className='table-responsive'> {id.pages} </td>
                  <td className='table-responsive'> {id.editorial} </td>
                  <td className='table-responsive'> {id.publicationyear} </td>
                  <td className='table-responsive'> {id.ISBN} </td>
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