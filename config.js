import firebase from "firebase"

 var firebaseConfig = {
    apiKey: "AIzaSyBkYt2pA3DySjAFRiD1T4JQJURrfv9QVVk",
  authDomain: "attendanceapp-c6e2f.firebaseapp.com",
  databaseURL: "https://attendanceapp-c6e2f-default-rtdb.firebaseio.com",
  projectId: "attendanceapp-c6e2f",
  storageBucket: "attendanceapp-c6e2f.appspot.com",
  messagingSenderId: "932943856186",
  appId: "1:932943856186:web:46d7f21db51712622feb03"
  };

  firebase.initializeApp(firebaseConfig)


export default firebase.database()