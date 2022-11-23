import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCjAidVQqWsMGEyN_tLs6V1e3DH4fsfKgA",
   authDomain: "yaqeen-startup.firebaseapp.com",
   projectId: "yaqeen-startup",
   storageBucket: "yaqeen-startup.appspot.com",
   messagingSenderId: "637852473874",
   appId: "1:637852473874:web:99e2f4ccba8924b18e96cb",
   measurementId: "G-SGJXV3TKVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;