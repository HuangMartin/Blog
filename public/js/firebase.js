let firebaseConfig = {
    apiKey: "AIzaSyA-j_HhkbMGLqJMwIFzOi28DlW-dajTRho",
    authDomain: "blogging-site-dc1cf.firebaseapp.com",
    projectId: "blogging-site-dc1cf",
    storageBucket: "blogging-site-dc1cf.appspot.com",
    messagingSenderId: "344539298242",
    appId: "1:344539298242:web:02d0354a174c12d7a1be5b"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();