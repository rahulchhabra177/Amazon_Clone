// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDNsJBf0MT8jClwhO02Yt-qweOTHnz8U-Y",
  authDomain: "fir-379dc.firebaseapp.com",
  projectId: "fir-379dc",
  storageBucket: "fir-379dc.appspot.com",
  messagingSenderId: "105886585981",
  appId: "1:105886585981:web:e8c3869c8b4c1ec6e60d14",
  measurementId: "G-VS9EP8KZEY"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();


const auth=firebase.auth();
export {db,auth};
