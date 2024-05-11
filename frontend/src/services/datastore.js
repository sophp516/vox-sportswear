/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase, ref, set, update, remove, onValue, push
} from 'firebase/database';
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
const db = getDatabase(app);

export const initFirebase = () => {
    return app;
}

/* Returns all clothing data from database */
export function getAllProducts(callback = () => {}){
  const reference = ref(db, "Products/");
  onValue(reference,(snapshot) => {
    const products = snapshot.val();
    callback(products); 
})
}

export function getSpecificProduct(productID, callback = ()=>{}){
  const reference = ref(db, "Products/" + productID);
  onValue(reference,(snapshot) => {
    const product = snapshot.val();
    callback(product); 
})
}

export function getAllCart(callback = ()=>{}){
  const reference = ref(db, "Cart/");
  onValue(reference,(snapshot) => {
    const cartItems = snapshot.val();
    callback(cartItems); 
  })
}

export function addToCart(id, product, size){
  const reference = ref(db,'Cart/' + id);
  set(reference, {
      productName: product.productName,
      price: product.price,
      size: size,
      id: id,
      description: product.description,
  })
}
