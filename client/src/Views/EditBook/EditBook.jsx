import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditBook() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});
  
    useEffect(() => {
      const fetchBook = async () => {
        try {
          const response = await fetch(`http://localhost:8000/book/books/${id}`);
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          setBook(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchBook();
    }, [id]);
  
    const handleChange = (e) => {
      setBook({ ...book, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8000/book/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(book),
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
          name="author"
          value={book.author || ''}
          onChange={handleChange}
          placeholder="Nombre del autor"
        />
        <br />
        <input
          type="text"
          name="tittle"
          value={book.title || ''}
          onChange={handleChange}
          placeholder="Titulo del libro"
        />
        <br />
        <input
          type="text"
          name="pages"
          value={book.pages || ''}
          onChange={handleChange}
          placeholder="Páginas del libro"
        />
        <br />
        <input
          type="text"
          name="editorial"
          value={book.editorial || ''}
          onChange={handleChange}
          placeholder="Editorial del libro"
        />
        <br />
        <input
          type="text"
          name="publicationyear"
          value={book.publicationyear || ''}
          onChange={handleChange}
          placeholder="Año publicación del libro"
        />
        <br />
        <input
          type="text"
          name="ISBN"
          value={book.ISBN || ''}
          onChange={handleChange}
          placeholder="ISBN del libro"
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
