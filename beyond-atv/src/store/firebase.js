import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCJyRDHF8Fe8IUhc-2Cka37MpPu0LvBCtY",
  authDomain: "easychat-e9c89.firebaseapp.com",
  projectId: "easychat-e9c89",
  storageBucket: "easychat-e9c89.appspot.com",
  messagingSenderId: "1023927140112",
  appId: "1:1023927140112:web:9023fa27f84c345afd6f95",
  measurementId: "G-CWDPJ6435W"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
