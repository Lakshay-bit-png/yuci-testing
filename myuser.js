const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTJhxhBm-aVpUHvQYQ-T7U3LkV0DQsXpg",
  authDomain: "one-wall-a3320.firebaseapp.com",
  databaseURL:
    "https://one-wall-a3320-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "one-wall-a3320",
  storageBucket: "one-wall-a3320.appspot.com",
  messagingSenderId: "484322267440",
  appId: "1:484322267440:web:6241beccd1f0d8e97b38f5",
  measurementId: "G-8D5EJGPWLJ",
});

var storedData = localStorage.getItem("userData");
var userData = JSON.parse(storedData);

function authPage(text, fun) {
  var authBtn = document.getElementById("signup2");
  authBtn.innerHTML=text;
  authBtn.setAttribute("onclick", fun);
  
}

function signOut() {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful
      console.log("User signed out");
      // Perform any additional actions after sign-out
    })
    .catch((error) => {
      // An error occurred during sign-out
      console.log("Sign-out error:", error);
    });
    localStorage.clear();
    window.location.assign('signup.html');
}




if (storedData != null) {
  
  firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then((userCredential) => {
      // Sign-in successful
      const user = userCredential.user;
      // Access the current user
      if (user) {
        // Perform actions with the current user
        console.log("Current user:", user.uid);
        authPage("SignOut", "signOut()");
        
      }
    })
    .catch((error) => {
      // Sign-in error
      console.log("Sign-in error:", error);
    });
  
} else {
  
  authPage("Login", "window.location.assign('signup.html')");
}
