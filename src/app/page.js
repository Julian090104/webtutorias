import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <main className="flex flex-col items-center text-center gap-12 md:gap-16">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/logo.svg" // Asegúrate de tener tu logo en la carpeta 'public'
          alt="Logo de tu página"
          width={180}
          height={38}
          priority
        />
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Bienvenido a Nuestra Página
        </h1>
        {/* Descripción */}
        <p className="text-lg sm:text-xl text-secondary max-w-md mx-auto">
          ¡Estamos encantados de que estés aquí! Explora nuestro contenido y
          disfruta de la experiencia.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto">
          <a
            className="btn-primary w-full sm:w-auto text-center py-3 px-6 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
            href="/about" // Enlace a una página importante como "Sobre nosotros"
          >
            Conoce más sobre nosotros
          </a>
          <a
            className="btn-secondary w-full sm:w-auto text-center py-3 px-6 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            href="/contact" // Enlace a la página de contacto
          >
            Contacta con nosotros
          </a>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="mt-16 text-sm text-gray-600">
        <div className="flex justify-center gap-6">
          <a
            href="/privacy-policy" // Enlace a la política de privacidad
            className="hover:underline"
          >
            Política de privacidad
          </a>
          <a
            href="/terms" // Enlace a los términos y condiciones
            className="hover:underline"
          >
            Términos y condiciones
          </a>
        </div>
      </footer>
    </div>
  );
}
