import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGlMw5N_PTMiNr_L_4MN5yAZ974HR5IAw",
  authDomain: "projectone-168f6.firebaseapp.com",
  projectId: "projectone-168f6",
  storageBucket: "projectone-168f6.firebasestorage.app",
  messagingSenderId: "1053125061424",
  appId: "1:1053125061424:web:10a77f32f40e582efb36f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



