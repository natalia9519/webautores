import React, { useState } from 'react';
import './LoginView.css'
import logo from '../../assets/book.png'
import { useEffect } from 'react';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formato del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('El email no es válido');
      return;
    }

    // Validar la longitud del nombre y contraseña
    if (email.length < 1 || email.length > 100 || password.length < 8 || password.length > 40) {
      alert('El email debe tener entre 1 y 100 caracteres y la contraseña entre 8 y 40 caracteres');
      return;
    }

    // Validar que los campos ocultos no estén cumplimentados
    if (document.querySelector('input[name="botField"]').value || document.querySelector('input[name="csrfField"]').value) {
      alert('No se permite el envío de campos ocultos');
      return;
    }

    // Realizar la petición HTTP al servidor
    const response = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      setRole(data.role);
      setUsername(data.username);
      // Guardar los datos en localStorage
      localStorage.setItem('username', data.username);
      localStorage.setItem('role', data.role);
    } else {
      alert(data.message);
    }
  };

  useEffect(() => {
    if (role === 'user') {
      window.location.href = '/our-dream';
    } else if (role === 'admin') {
      window.location.href = '/user-manage';
    }
  }, [role]);

  return (
    <main className='form-login-view'>

      <form onSubmit={handleSubmit} className='form'>
        <img src={logo} alt="logo de la página" className='logo-form'/>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <input type="hidden" name="botField" />
        <input type="hidden" name="csrfField" />
        <button type="submit" className='btn-pages'>Iniciar sesión</button>
      </form>

    </main>
  );
}