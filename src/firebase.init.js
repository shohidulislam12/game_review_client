import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
  // apiKey: "AIzaSyBh2uYdzYGkKHTtDzT3EELUIBJj-KM77hI",
  // authDomain: "onceptual-2.firebaseapp.com",
  // projectId: "onceptual-2",
  // storageBucket: "onceptual-2.firebasestorage.app",
  // messagingSenderId: "687618808931",
  // appId: "1:687618808931:web:f1b473b02fb297d7e7ac56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);