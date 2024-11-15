// src/app/authentication/login.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@services/firebaseAuth'; // Asegúrate de que esta ruta es correcta
import AuthForm from '@components/authForm';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    try {
      await loginUser(email, password); // Inicia sesión
      router.push('/authentication/courseList'); // Redirige a la página de courseList después de iniciar sesión
    } catch (error) {
      setError(error.message); // Muestra el error si ocurre
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} error={error} />;
}
