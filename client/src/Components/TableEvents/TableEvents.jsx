import React, { useState, useEffect } from 'react';
import "../TableBook/TableBook.css";

export default function TableEvents() {
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
                const response = await fetch("https://webautores.onrender.com/event/events");
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

    //función para añadir nuevos eventos
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [places, setPlaces] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')


    
    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://webautores.onrender.com/event/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ author, title, places, description, date }),
            });
            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }
            const newData = await response.json();
            setDatos([...datos, newData]);
            setAuthor('');
            setTitle('');
            setPlaces('');
            setDescription('');
            setDate('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <section className='section-table-book'>
                <h2 onClick={toggleFormVisibility} className='btn-h2'>Agregar nuevos eventos <i className="fas fa-plus"></i></h2>

                {isFormVisible && ( 
                    <form onSubmit={store} className="form-table-book">
                        <input type="text" value={author}
                            onChange={(e) => setAuthor(e.target.value)} placeholder="Nombre del autor" /><br />
                        <input type="text" value={title}
                            onChange={(e) => setTitle(e.target.value)} placeholder="Titulo del evento" /><br />
                        <input type="text" value={places}
                            onChange={(e) => setPlaces(e.target.value)} placeholder="Lugar del evento" /><br />
                        <input type="text" value={description}
                            onChange={(e) => setDescription(e.target.value)} placeholder="Descripción del evento" /><br />
                        <input type="date" value={date}
                            onChange={(e) => setDate(e.target.value)} placeholder="Fecha del evento" /><br />                          
                        <button type='submit' className='btn btn-primary'>Añadir evento</button>
                    </form>
                )}
            </section>

        </>
    )
}
