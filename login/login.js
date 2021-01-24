//  Login Form
let loginForm = document.getElementById("login-form");
let loginPassword = document.getElementById("login-password");
let loginMail = document.getElementById("login-mail");
let loginSubmit = document.getElementById("login-submit");


loginForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const userData = JSON.parse(localStorage.getItem('usersArr'));
  const {email, password} = userData.find(item => item.email === loginMail.value);
  if(email != loginMail.value || password != loginPassword.value){
    alert('Login or password is not correct');
  }else{
    window.location.replace("../dashbord/index.html");
  }
});