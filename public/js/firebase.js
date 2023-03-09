let firebaseConfig = {
    apiKey: "AIzaSyCbVFjK-GzLShQfPApLdZhFzia5RIWty5U",
    authDomain: "blogging-website-e6915.firebaseapp.com",
    projectId: "blogging-website-e6915",
    storageBucket: "blogging-website-e6915.appspot.com",
    messagingSenderId: "141240064069",
    appId: "1:141240064069:web:ad85c6b348ee8cc9bdab2c"
};


firebase = initializeApp(firebaseConfig);


let db = firebase.firestore();