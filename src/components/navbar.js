"use client"; // Asegura que el componente se renderice en el cliente

import Link from "next/link";
import { useAuth } from "@lib/authContext";
import { auth } from "@services/firebaseAuth";

const Navbar = () => {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
  };

  console.log("Navbar renderizado. Estado de loading:", loading);

  // Si aún se está verificando el estado de autenticación, no mostrar el navbar
  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se verifica el estado
  }

  return (
    <nav>
      <ul className={`flex w-full px-8 text-lg font-medium ${user ? "logged-in" : ""}`}>
        {!user ? (
          <>
            <li>
              <Link
                href="/authentication/login"
                className="navbar-link hover:text-secondary-color transition-colors"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link
                href="/authentication/register"
                className="navbar-link hover:text-secondary-color transition-colors"
              >
                Registrarse
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* Perfil y Cerrar sesión a la derecha cuando está logueado */}
            <li>
              <Link
                href="/profile"
                className="navbar-link hover:text-secondary-color transition-colors"
              >
                Perfil
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="logout navbar-link hover:text-secondary-color transition-colors"
                onClick={handleLogout}
              >
                Cerrar sesión
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
