"use client";
import { useState } from 'react';

export default function AuthForm({ type, onSubmit, error }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'register') {
      onSubmit(e, name, email, password); // Pasa el nombre junto con el correo y la contraseña
    } else {
      onSubmit(e, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === 'register' ? 'Registrarse' : 'Iniciar sesión'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {type === 'register' && ( // Muestra el campo de nombre solo si es registro
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">{type === 'register' ? 'Registrarse' : 'Iniciar sesión'}</button>
    </form>
  );
}
