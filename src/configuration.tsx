// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0q4Dnj57zxdPaPC9nN1Cno2PGE9BC5tQ",
    authDomain: "lovu-89a50.firebaseapp.com",
    databaseURL: "https://lovu-89a50-default-rtdb.firebaseio.com",
    projectId: "lovu-89a50",
    storageBucket: "lovu-89a50.firebasestorage.app",
    messagingSenderId: "770075284125",
    appId: "1:770075284125:web:2cb994cf2ce383c6ac7a74"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;