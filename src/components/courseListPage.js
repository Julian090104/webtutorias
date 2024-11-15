// components/CourseList.js
import React from "react";

const CourseList = () => {
  const courses = [
    { title: "Matemática básica", tutor: "Pedro Álvarez" },
    { title: "Inglés básico", tutor: "Miguel Arboleda" },
    { title: "Filosofía", tutor: "Antonio Sevilla" },
    { title: "Programación intermedia", tutor: "Pedro Álvarez" },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h1>Sesion Iniciada</h1>
      <h2 className="text-3xl font-bold mb-8">CURSOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-primary-color text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-md">Tutor: {course.tutor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
