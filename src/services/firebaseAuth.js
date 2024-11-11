import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Aquí debes colocar tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqxjD09CGrYtlscSuEP5yfTgGZ32QunZw",
  authDomain: "wtoup-96494.firebaseapp.com",
  projectId: "wtoup-96494",
  storageBucket: "wtoup-96494.firebasestorage.app",
  messagingSenderId: "969347128912",
  appId: "1:969347128912:web:b1468abc55cf4e8d607b55",
  measurementId: "G-7EPDRG30CF"
};

const app = initializeApp(firebaseConfig); // Inicializa la app con Firebase
const auth = getAuth(app); // Autenticación de Firebase

export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password); // Registra un nuevo usuario
  } catch (error) {
    throw error; // Lanza el error para ser capturado en el componente
  }
};

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); // Inicia sesión
  } catch (error) {
    throw error; // Lanza el error para ser capturado en el componente
  }
};
