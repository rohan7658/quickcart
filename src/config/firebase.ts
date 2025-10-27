
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFirestoreEmulator } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  //Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Use Firebase emulator if in development environment
if (import.meta.env.DEV) {
  try {
    // Uncomment this when you want to use Firebase emulators
    // connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Using Firebase emulator');
  } catch (error) {
    console.error('Failed to connect to Firebase emulator:', error);
  }
}

export { app, auth, db };

