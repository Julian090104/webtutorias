"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@services/firebaseAuth'; // Asegúrate de tener la ruta correcta
import AuthForm from '@components/authForm';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e, name, email, password) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password); // Incluye el nombre en el registro
      router.push('/authentication/login'); // Redirige a la página de login después del registro
    } catch (error) {
      setError(error.message);
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} error={error} />;
}
