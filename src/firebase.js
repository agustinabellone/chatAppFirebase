import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDc2ryn1xY394z4u0i7J0K-P6a7bsG_vgk",
    authDomain: "chatapp-24484.firebaseapp.com",
    projectId: "chatapp-24484",
    storageBucket: "chatapp-24484.appspot.com",
    messagingSenderId: "599694525925",
    appId: "1:599694525925:web:4f6f5ceaad15027bab1b0c"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }