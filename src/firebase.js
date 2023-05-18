import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAOy4Mb0z57LXP7HWer-Z-kqSh3hZDBysI",
  authDomain: "chat-online-ae1cc.firebaseapp.com",
  projectId: "chat-online-ae1cc",
  storageBucket: "chat-online-ae1cc.appspot.com",
  messagingSenderId: "280235635093",
  appId: "1:280235635093:web:f9eeb751386683459b869c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()