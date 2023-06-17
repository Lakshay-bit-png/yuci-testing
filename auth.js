const firebaseAp = firebase.initializeApp({
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

const db = firebaseAp.database();
const auth = firebaseAp.auth();

function storeUser(email, password) {
  var obj = { email: email, password: password };
  var objString = JSON.stringify(obj);
  localStorage.setItem("userData", objString);
  window.location.href = "index.html";
}

// Sign up function
const signUp = () => {
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;
  const userName = document.getElementById("U1").value;
  const mobile = document.getElementById("U3").value;
  console.log(userName, email, password);

  const userData = {
    name: userName,
    email: email,
    mobile: mobile,
  };

  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      
      
      db.ref('users/'+userCredential.user.uid)
        .set(userData)
        .then(() => {
          console.log("Data written successfully");
          storeUser(email, password);
        })
        .catch((error) => {
          console.error("Error writing data:", error);
        });

        //
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      storeUser(email, password);
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};




function signupopen(x,y){
  
    document.getElementById(x).style.visibility="hidden";
    
   document.getElementById(x).style.height="0px";
  
   document.getElementById(y).style.visibility="visible";
   document.getElementById(y).style.opacity="1";
   if (y=='up'){
   document.getElementById(y).style.height="550px";}
   if (y=='in'){document.getElementById(y).style.height="400px";}
    
}
