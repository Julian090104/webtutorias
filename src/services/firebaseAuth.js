import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
const db = getFirestore(app); // Firestore

// Función para registrar usuario con nombre
export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Registra un nuevo usuario
    const user = userCredential.user;

    // Actualiza el nombre del usuario en el perfil de Firebase Auth
    await updateProfile(user, { displayName: name });

    // Agregar el nombre en Firestore (puedes agregar más campos según sea necesario)
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
    });

  } catch (error) {
    throw error; // Lanza el error para ser capturado en el componente
  }
};

// Función de login
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); // Inicia sesión
  } catch (error) {
    throw error; // Lanza el error para ser capturado en el componente
  }
};
