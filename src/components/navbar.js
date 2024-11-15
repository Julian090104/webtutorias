"use client"; 
import Link from "next/link";
import { useAuth } from "@lib/authContext";
import { auth } from "@services/firebaseAuth";

const Navbar = () => {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    console.log("User has logged out");
  };

  console.log("Navbar renderizado. Estado de loading:", loading, "Usuario:", user);

  if (loading) {
    return null; // No mostrar nada hasta que el estado de autenticación esté listo
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
