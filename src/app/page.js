import Image from "next/image";
import CourseList from "@components/courseListPage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <main className="flex flex-col items-center text-center gap-12 md:gap-16">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/WTOimg.png" // Asegúrate de tener tu logo en la carpeta 'public'
          alt="Logo de tu página"
          width={180}
          height={38}
          priority
        />
        
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          ¡Bienvenidos a Nuestra Página!
        </h1>
        
        {/* Descripción */}
        <p className="text-lg sm:text-xl text-secondary max-w-md mx-auto">
          ¡Estamos encantados de que estés aquí! Explora de nuestro contenido y disfruta la experiencia.
        </p>
        
        {/* Sección "¿Qué somos?" */}
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          ¿Qué somos?
        </h2>
        <p className="text-lg sm:text-xl text-secondary max-w-md mx-auto">
          Esta es una plataforma de tutorías en línea diseñada para conectar estudiantes y tutores de forma rápida y fácil. Podrás ingresar como estudiante y aprender de distintos temas que suben múltiples tutores, o ingresar como tutor y crear tu propio curso sobre lo que más sabes y quieras explicarles a los demás.
        </p>
      </main>

      {/* Pie de página minimalista */}
      <footer className="mt-16 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
}
