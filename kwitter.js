
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  Var const firebaseConfig = {
    apiKey: "AIzaSyA7VjJQ4fs3hlb3aKHc1vgfzKVW427NfjQ",
    authDomain: "project-94-cb5f8.firebaseapp.com",
    projectId: "project-94-cb5f8",
    storageBucket: "project-94-cb5f8.appspot.com",
    messagingSenderId: "768062611632",
    appId: "1:768062611632:web:e3ef6b379c04a114a35b75