import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHcsSHg89y4LF-W0aU9NZCiYQwsO6vMTU",
    authDomain: "app-tarefas-4a227.firebaseapp.com",
    projectId: "app-tarefas-4a227",
    storageBucket: "app-tarefas-4a227.appspot.com",
    messagingSenderId: "948575303963",
    appId: "1:948575303963:web:05765eb6caa08284aebbbe"
}

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
