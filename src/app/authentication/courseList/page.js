// src/app/authentication/courseList/page.js
"use client";
import { useAuth } from "@lib/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CourseList from "@components/courseListPage";

export default function CourseListPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/authentication/login"); // Redirige si no está autenticado
    }
  }, [user, router]);

  return user ? <CourseList /> : null; // Renderiza solo si está autenticado
}
