import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
 apiKey: "AIzaSyD_1xdW6DGwnxfmxkhHDqAmV-zhLeZwQOM",
  authDomain: "site-tw-c0f50.firebaseapp.com",
  projectId: "site-tw-c0f50",
  storageBucket: "site-tw-c0f50.firebasestorage.app",
  messagingSenderId: "495508423378",
  appId: "1:495508423378:web:de680c62841afb783e230b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
