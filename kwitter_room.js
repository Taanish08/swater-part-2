var firebaseConfig = {
      apiKey: "AIzaSyAzCuebQHgICunSMBaW3hIr2FXRrT7mYbA",
      authDomain: "swatter-4dae9.firebaseapp.com",
      databaseURL: "https://swatter-4dae9-default-rtdb.firebaseio.com",
      projectId: "swatter-4dae9",
      storageBucket: "swatter-4dae9.appspot.com",
      messagingSenderId: "365153507323",
      appId: "1:365153507323:web:d0fd653d938a84d18d5d5e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();
