import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/ViewAllBooks/ViewAllBooks.css';
import "../../Components/TableBook/TableBook.css";

export default function SuperAdminView() {
    
    //Función para pintar la tabla
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch("http://localhost:8000/user/users");
=======
                const response = await fetch("https://webautores.onrender.com/user/users");
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

        fetchData();
    }, []);

    //función para crear nuevas salas
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')


    const store = async (e) => {
        e.preventDefault();
        try {
<<<<<<< HEAD
            const response = await fetch("http://localhost:8000/user/register", {
=======
            const response = await fetch("https://webautores.onrender.com/user/register", {
>>>>>>> develop
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, role }),
            });
            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }
            const newData = await response.json();
            setDatos([...datos, newData]);
            setUsername('');
            setPassword('');
            setRole('');
        } catch (error) {
            console.error(error);
        }
    };

    //función desplegable
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };


//eliminar una sala
const deleteBlog = async (id) => {
    try {
<<<<<<< HEAD
      const response = await fetch(`http://localhost:8000/user/${id}`, {
=======
      const response = await fetch(`https://webautores.onrender.com/user/${id}`, {
>>>>>>> develop
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar la sala');
      }
  
      // Actualizar la lista de salas después de eliminar
      const updatedData = await fetchData();
      setDatos(updatedData);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
<<<<<<< HEAD
        const response = await fetch("http://localhost:8000/user/users");
=======
        const response = await fetch("https://webautores.onrender.com/user/users");
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


  return (

    <main>

    <section className='section-view-books'>
        <h2 onClick={toggleFormVisibility} className='btn-h2'>Agregar nuevos usuarios <i className="fas fa-plus"></i></h2>

        {isFormVisible && (
            <form onSubmit={store} className="form-table-book">
                <input type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)} placeholder="Nombre del usuario" /><br />
                <input type="text" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" /><br />
                <input type="text" value={role}
                    onChange={(e) => setRole(e.target.value)} placeholder="Tipo de usuario" /><br />
                
                <button type='submit' className='btn btn-primary'>Añadir Usuario</button>
            </form>
        )}
    </section>
    <section className='section-view-books'>
        <article className='row '>
                <table className='table-view-books'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Usuarios</th>
                            <th className='table-responsive'>Contraseña</th>
                            <th className='table-responsive'>Tipo de usuario</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((id) => (
                            <tr key={id.id}>
                                <td> {id.username} </td>
                                <td className='table-responsive'> {id.password} </td>
                                <td className='table-responsive'> {id.role} </td>
                                <td className="btn-table">
                                    <Link to={`/EditUser/${id._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                    <button onClick={ ()=> deleteBlog(id._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                </td>


                            </tr>
                        ))}
                    </tbody>

                </table>

        </article>

    </section>
</main>
)

}
