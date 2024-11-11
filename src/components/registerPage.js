"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@services/firebaseAuth'; // Importa la función para registrar usuarios
import AuthForm from '@components/authForm'; // Importa el formulario común

export default function RegisterPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e, email, password) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      router.push('/authentication/login'); // Redirige a la página de login después del registro
    } catch (error) {
      setError(error.message); // Muestra el error si ocurre
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} error={error} />;
}
