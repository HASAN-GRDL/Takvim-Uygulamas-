function myFunction() {
  window.open("/ekran/ekran.html" ) ;
}







function registerFunction() {

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var password = document.getElementById("password").value;
var userName = document.getElementById("userName").value;
var tcNo = document.getElementById("tcNo").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;

const newPost = {
  first_name : firstName,
  last_name : lastName,
  password : password,
  username : userName,
  tc_no : tcNo,
  phone : phone,
  email : email,
  address : address
}

  fetch("http://localhost:4444/api/auth/",{
    method : "POST",
    body : JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
  })

  window.alert("ozan kayıt etti");
}



 
  