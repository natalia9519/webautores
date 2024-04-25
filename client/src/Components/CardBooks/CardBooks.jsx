import React, { useState, useEffect } from 'react';
import './CardBooks.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
    inset: '50% auto auto 50%',
    background: 'rgb(30, 3, 137)',
    padding: '2rem',
    transform: 'translate(-50%, -50%)',
    width: '20rem',
    height: '50%',
    zIndex: '900',
    color: '#FFFFFF',
    marginTop: '3rem',
    fontSize: '18px',

  },
};

export default function CardBooks() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://webautores.onrender.com/book/books");
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

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  return (
    <section className='section-card-book-view'>

        {data.map((book) => (
          <div key={book.id} className="book-card-div" onClick={() => openModal(book)}>
            <img src={book.image} alt="Room image" className="book-card-image"/>
            <p><strong>{book.title}</strong></p>
          </div>
        ))}

      <Modal isOpen={modalIsOpen} style={customStyles}>
        {selectedBook && (
          <>
            <h2>{selectedBook.title}</h2>
            <p>Autor: {selectedBook.author}</p>
            <p>Páginas: {selectedBook.pages}</p>
            <p>Editorial: {selectedBook.editorial}</p>
            <p>Año de publicación: {selectedBook.publicationyear}</p>
            <p>ISBN: {selectedBook.ISBN}</p>
            <button onClick={closeModal} className='btn-card-book'>Cerrar</button>
          </>
        )}
      </Modal>
    </section>
  );
}
