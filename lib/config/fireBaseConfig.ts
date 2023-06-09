// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDr9SZTj3tOKHlQkIioa7ZVS-blvedu9yY',
  authDomain: 'taskme-533fd.firebaseapp.com',
  projectId: 'taskme-533fd',
  storageBucket: 'taskme-533fd.appspot.com',
  messagingSenderId: '634966674521',
  appId: '1:634966674521:web:a98e094596bd68d7ae3548',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
