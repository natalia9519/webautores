import "./TableBook.css";
import React, { useState, useEffect } from 'react';


export default function TableBook() {

    //función desplegable
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    //Función para pintar la tabla
    const [datos, setDatos] = useState([]);

    useEffect(() => {
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

        fetchData();
    }, []);

    //función para añadir nuevos libros
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [pages, setPages] = useState('')
    const [editorial, setEditorial] = useState('')
    const [publicationyear, setPublicationYear] = useState('')
    const [ISBN, setISBN] = useState('')

    
    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/book/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ author, title, pages, editorial, publicationyear, ISBN }),
            });
            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }
            const newData = await response.json();
            setDatos([...datos, newData]);
            setAuthor('');
            setTitle('');
            setPages('');
            setEditorial('');
            setPublicationYear('');
            setISBN('');
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>

            <section className='section-table-book'>
                <h2 onClick={toggleFormVisibility} className='btn-h2'>Agregar nuevos libros <i className="fas fa-plus"></i></h2>

                {isFormVisible && ( 
                    <form onSubmit={store} className="form-table-book">
                        <input type="text" value={author}
                            onChange={(e) => setAuthor(e.target.value)} placeholder="Nombre del autor" /><br />
                        <input type="text" value={title}
                            onChange={(e) => setTitle(e.target.value)} placeholder="Titulo del libro" /><br />
                        <input type="text" value={pages}
                            onChange={(e) => setPages(e.target.value)} placeholder="Numero de páginas" /><br />
                        <input type="text" value={editorial}
                            onChange={(e) => setEditorial(e.target.value)} placeholder="Nombre de la editorial" /><br />
                        <input type="text" value={publicationyear}
                            onChange={(e) => setPublicationYear(e.target.value)} placeholder="Año publicado" /><br />
                        <input type="text" value={ISBN}
                            onChange={(e) => setISBN(e.target.value)} placeholder="Número de ISBN" /><br />                            
                        <button type='submit' className='btn btn-primary'>Añadir libro</button>
                    </form>
                )}
            </section>

        </>
    )

}


