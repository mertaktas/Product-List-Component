// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYALogcaI7jK8I5zgt19LjxW6A5vYIM24",
    authDomain: "product-list-component.firebaseapp.com",
    projectId: "product-list-component",
    storageBucket: "product-list-component.appspot.com",
    messagingSenderId: "1056245802274",
    appId: "1:1056245802274:web:836d5f1cbd72c0f389b17b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();