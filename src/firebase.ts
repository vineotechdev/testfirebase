import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3e8qBjF90YSoUH_yR8y1aMQy2F1A5B6M",
  authDomain: "testfirebase-ae80d.firebaseapp.com",
  projectId: "testfirebase-ae80d",
  storageBucket: "testfirebase-ae80d.firebasestorage.app",
  messagingSenderId: "241888573755",
  appId: "1:241888573755:web:f06bb9b0a34add169a5f1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
