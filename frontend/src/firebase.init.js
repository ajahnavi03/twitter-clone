import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcc_gB8tjuGgiZtd2uDjIisA8ToNyKy7Y",
    authDomain:"twitter-clone-525c0.firebaseapp.com",
    projectId:"twitter-clone-525c0",
    storageBucket:"twitter-clone-525c0.appspot.com",
    messagingSenderId:"1082874646652",
    appId:"1:1082874646652:web:25fea1e9cf538e6ad8ad18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
