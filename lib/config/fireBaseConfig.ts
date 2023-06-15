import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDr9SZTj3tOKHlQkIioa7ZVS-blvedu9yY',
  authDomain: 'taskme-533fd.firebaseapp.com',
  projectId: 'taskme-533fd',
  storageBucket: 'taskme-533fd.appspot.com',
  messagingSenderId: '634966674521',
  appId: '1:634966674521:web:a98e094596bd68d7ae3548',
};

export const app = initializeApp(firebaseConfig);
