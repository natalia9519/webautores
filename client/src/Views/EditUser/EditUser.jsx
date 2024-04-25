import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditUser() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/users/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }
      navigate('/user-manage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main-edit-reserve">
      <section className="section-table-book">
        <h2 className="section-edit-h2">Editar Usuarios</h2>
        <form onSubmit={handleSubmit} className="form-table-book">
          <input
            type="text"
            name="username"
            value={user.username || ''}
            onChange={handleChange}
            placeholder="Nombre del usuario"
          />
          <br />
          <input
            type="text"
            name="password"
            value={user.password || ''}
            onChange={handleChange}
            placeholder="Contraseña"
          />
          <br />
          <input
            type="text"
            name="email"
            value={user.email || ''}
            onChange={handleChange}
            placeholder="Correo electronico"
          />
          <br />
          <input
            type="text"
            name="role"
            value={user.role || ''}
            onChange={handleChange}
            placeholder="Role del usuario"
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
