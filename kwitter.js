//modificar base de datos
var firebaseConfig = {
    apiKey: "AIzaSyC_FC_Ur0Id_SbBlD829C2L5U59MtwY0A8",
    authDomain: "kwitterprueba-b2345.firebaseapp.com",
    databaseURL: "https://kwitterprueba-b2345-default-rtdb.firebaseio.com",
    projectId: "kwitterprueba-b2345",
    storageBucket: "kwitterprueba-b2345.appspot.com",
    messagingSenderId: "1060334207649",
    appId: "1:1060334207649:web:f92650661c79f2187ea6e0"
  };  
firebase.initializeApp(firebaseConfig);

function addUser(){


user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}