"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@services/firebaseAuth'; // Asegúrate de que esta ruta es correcta
import AuthForm from '@components/authForm';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e, name, email, password) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password); // Registra al usuario
      router.push('/authentication/login'); // Redirige a la página de login
    } catch (error) {
      setError(error.message); // Muestra el error si ocurre
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} error={error} />;
}
