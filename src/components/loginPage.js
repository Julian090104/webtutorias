"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@services/firebaseAuth'; // Importa la función para iniciar sesión
import AuthForm from '@components/authForm'; // Importa el formulario común

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      router.push('/'); // Redirige a la página principal después de iniciar sesión
    } catch (error) {
      setError(error.message); // Muestra el error si ocurre
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} error={error} />;
}
