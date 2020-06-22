firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
      window.location.href="./public/dashboard.html";
  }
  else{
    window.location.href="index.html";
  }
});

    function login(){

      var userEmail = document.getElementById("email").value;
      var userPass = document.getElementById("password").value;
    
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
      });
    
    }
    function logout(){
      firebase.auth().signOut();
      
    }

 /*const list_div=document.querySelector("#list_div");   
 var db=firebase.firestore();
 db.collection("customer_collection").onSnapshot(function(querySnapshot){
  querySnapshot.docChanges.forEach(function(changes){
    if(changes.type==="added"){
      list_div.innerHTML +="<div class='nav-item'><h3>"+change.doc.data().name+"</h3><p>Email"+change.doc.data().email+"</p></div>"
    }
  });
 });*/


var db = firebase.firestore();
var earning = document.getElementById("list_div");

db.collection("customer_collection").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data().name + "\n");
        earning.innerHTML += "<h3>" + doc.data().name + "</h3>";
    });
});