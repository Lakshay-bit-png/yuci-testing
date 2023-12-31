
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
const mediaQuery = window.matchMedia('(max-width: 768px)');
function authPage(text, fun) {
  var authBtn = document.getElementById("signup2");
  authBtn.innerHTML=text;
  authBtn.setAttribute("onclick", fun);
  
}

function signOut() {
  console.log('chalgayo')
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
        
        if(mediaQuery.matches){
          console.log(9);
          document.getElementById('signoutmobile').style.visibility='visible';
  
          // Get the element(s) by class name
       const elements = document.getElementsByClassName('xplore2');
       
       // Convert the HTMLCollection to an array
       const elementsArray = Array.from(elements);
       
       // Remove each element
       elementsArray.forEach(element => {
         element.parentNode.removeChild(element);
       });
       
      //document.getElementById('coursekoi').addEventListener("click",signOut())      
     }
      else{
        authPage("SignOut", "signOut()");
        console.log(98)
      }
        
      }
    })
    .catch((error) => {
      // Sign-in error
      console.log("Sign-in error:", error);
    });
  
} else {
  
        document.getElementById('signoutmobile').style.visibility='hidden';
  
  authPage("Login", "window.location.assign('signup.html')");
}

