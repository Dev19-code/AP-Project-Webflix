import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { initializeFirestore, persistentLocalCache } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA98YDCtozjqg-rrcGjQObXd5NEVoF3hLc",
    authDomain: "webflix-ap1-project.firebaseapp.com",
    projectId: "webflix-ap1-project",
    storageBucket: "webflix-ap1-project.appspot.com",
    messagingSenderId: "625011942136",
    appId: "1:625011942136:web:9af0d12c8b7fe3886c910d",
    measurementId: "G-PBFXXTSYMF"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, { localCache: persistentLocalCache() });