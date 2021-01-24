// Registration form  


let registrationForm = document.getElementById('registration-form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
registrationForm.addEventListener('submit', getSubmit);

function getSubmit(e) {
  if(password.value.length < "8"){
    alert("Your password very short");
    e.preventDefault();
    return;
  }
  if (email.value === "" ){
    alert('Please enter youre email!!!');
    e.preventDefault();
    return;
  } 
  if (password.value === ""){
    alert('Please enter youre password!!!');
    e.preventDefault();
    return;
  }
  if (confirmPassword.value === ""){
    alert('Please enter confirm password!!!');
    e.preventDefault();
    return;
  } if (password.value !== confirmPassword.value){
    alert('Not confirm password!!!');
    e.preventDefault();
    return;
}
  let userData = {
    "email": email.value,
    "password": password.value
  };
  let usersArr = JSON.parse(localStorage.getItem("usersArr") || "[]");
  usersArr.push(userData);
  localStorage.setItem("usersArr", JSON.stringify(usersArr));
  window.location.replace("../login/index.html");
  e.preventDefault();
}







