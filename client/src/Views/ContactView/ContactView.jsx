import React, { useState } from 'react';
import validator from 'validator';
import './ContactView.css';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorAlert, setErrorAlert] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setErrorAlert('Por favor completa todos los campos correctamente.');
      setTimeout(() => {
        setErrorAlert('');
      }, 3000);
      return;
    }

    if (!validator.isEmail(email)) {
      setErrorAlert('Por favor ingresa un email válido.');
      setTimeout(() => {
        setErrorAlert('');
      }, 3000);
      return;
    }

    if (name.length > 80 || subject.length > 120 || message.length > 400) {
      setErrorAlert('Por favor verifica la longitud de los campos.');
      setTimeout(() => {
        setErrorAlert('');
      }, 3000);
      return;
    }

    if (!acceptTerms) {
      setErrorAlert('Por favor acepta los términos y condiciones.');
      setTimeout(() => {
        setErrorAlert('');
      }, 3000);
      return;
    }

    // Si se llega aquí, el formulario es válido y se puede enviar
    const formData = {
      name,
      email,
      subject,
      message
    };

    fetch('http://localhost:8000/contact/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Formulario enviado con éxito');
          setFormSent(true);
        } else {
          throw new Error('Error al enviar el formulario');
        }
      })
      .catch(error => {
        console.error(error);
      });

    // restablecer los campos del formulario
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setAcceptTerms(false);
      setFormSent(false);
    }, 3000);
  };

  return (
    <main className='main-contact-view'>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Contacta con nosotros</h2>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} maxLength="80" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="100" required />

        <label htmlFor="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} maxLength="120" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength="400" required></textarea>

        <label htmlFor="accept-terms">
          <input type="checkbox" id="accept-terms" name="accept-terms" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} required style={{ width: '13px' }} />
          Acepto los términos y condiciones
        </label>

        {errorAlert && <div className="alert">{errorAlert}</div>}

        <button type="submit" className='btn-pages'>
          Enviar
        </button>

        {formSent && (
          <div className="alert success">Formulario enviado con éxito</div>
        )}
      </form>
    </main>
  );
}