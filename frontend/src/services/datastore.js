// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM8MginmCIDm3wF84yEO3OyOTw2tcB49I",
  authDomain: "vox-sportswear.firebaseapp.com",
  projectId: "vox-sportswear",
  storageBucket: "vox-sportswear.appspot.com",
  messagingSenderId: "111797782567",
  appId: "1:111797782567:web:a929b40c1e066739bbe602",
  measurementId: "G-5FMNH39JTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
}