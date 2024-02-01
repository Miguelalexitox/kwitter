
//AÑADE TUS ENLACES DE FIREBASE
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

user_name = localStorage.getTtem("user_name");
document.getElementById("user_name").innerHTML = "bienvenido "+ user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "añadir el nombre de la sala"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombre de la sala: "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

document.getElementById("output").innerHTML += row;


      //Final del código
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
       localStorage.setItem("room_name". room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");      
      window.location = "index.html";
}