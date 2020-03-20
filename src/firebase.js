import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyAf5O9Rzr6pgWWm3KaYvFt2E4NLJBA8RT4",
    authDomain: "slack-overflow-460c0.firebaseapp.com",
    databaseURL: "https://slack-overflow-460c0.firebaseio.com",
    projectId: "slack-overflow-460c0",
    storageBucket: "slack-overflow-460c0.appspot.com",
    messagingSenderId: "535339523061",
    appId: "1:535339523061:web:2ad9547a8cb4073b2b5ebc",
    measurementId: "G-TDKZS6M0H7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;