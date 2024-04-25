
import React, { useState, useEffect } from 'react';
import './LoginView.css';
import logo from '../../assets/book.png';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [failedAttempts, setFailedAttempts] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if hidden fields are empty
    if (document.querySelector('input[name="botField"]').value || document.querySelector('input[name="csrfField"]').value) {
      alert('No se permite el envío de campos ocultos');
      return;
    }

    // Validar el formato del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('El email no es válido');
      setFailedAttempts(failedAttempts => ({ ...failedAttempts, [getIP()]: (failedAttempts[getIP()] || 0) + 1 }));
      return;
    }

    // Validar la longitud del nombre y contraseña
    if (email.length < 1 || email.length > 100 || password.length < 8 || password.length > 40) {
      alert('El email debe tener entre 1 y 100 caracteres y la contraseña entre 8 y 40 caracteres');
      setFailedAttempts(failedAttempts => ({ ...failedAttempts, [getIP()]: (failedAttempts[getIP()] || 0) + 1 }));
      return;
    }

    // Realizar la petición HTTP al servidor
<<<<<<< HEAD
    const response = await fetch('http://localhost:8000/user/login', {
=======
    const response = await fetch('https://webautores.onrender.com/user/login', {
>>>>>>> develop
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
      setFailedAttempts(failedAttempts => ({ ...failedAttempts, [getIP()]: (failedAttempts[getIP()] || 0) + 1 }));
      alert(data.message);
    }
  };

  const handleFailedAttempts = () => {
    if (failedAttempts[getIP()] && failedAttempts[getIP()] >= 3) {
      setSubmitDisabled(true);
      setTimeLeft(15 * 60); // 15 minutos
    }
  };

  const handleSubmitDisabled = () => {
    if (submitDisabled && timeLeft) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const message = `Por favor, espere ${minutes} minutos y ${seconds} segundos antes de intentarlo nuevamente.`;
      alert(message);
      setTimeLeft(timeLeft - 1);
    }
  };

  const handleRoleChange = () => {
    if (role === 'user') {
      window.location.href = '/our-dream';
    } else if (role === 'admin') {
      window.location.href = '/user-manage';
    }
  };

  useEffect(() => {
    handleFailedAttempts();
  }, [failedAttempts]);

  useEffect(() => {
    handleSubmitDisabled();
  }, [submitDisabled, timeLeft]);

  useEffect(() => {
    handleRoleChange();
  }, [role]);

  const getIP = () => {
    const ip = localStorage.getItem('ip');
    if (ip) {
      return ip;
    }
    const interfaces = window.navigator.interfaceEnums;
    if (interfaces) {
      for (const key in interfaces) {
        if (!isNaN(key)) {
          const ip = interfaces[key];
          if (ip.indexOf('192.168.') === 0 || ip.indexOf('10.0.') === 0 || ip.indexOf('172.') === 0) {
            localStorage.setItem('ip', ip);
            return ip;
          }
        }
      }
    }
    return '127.0.0.1';
  };

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
        <input type="hidden" name="botField" value=""/>
        <input type="hidden" name="csrfField" value=""/>
        <button type="submit" className='btn-pages' disabled={submitDisabled}>Iniciar sesión</button>
      </form>
    </main>
  );
};

export default LoginView;