function myFunction() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("pd").value;

  const newPost = {
    username: username,
    password: password

  }

  fetch("http://localhost:4444/api/auth/login", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (json.username == username) {
        window.alert("Giriş Yapıldı");
        window.location.href = "/ekran/ekran.html?user=" + encodeURIComponent(json.id);
      }
      else {
        window.alert("kullanıcı adı veya şifre yanlış");
      }
    })
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
  console.log(document.getElementById("cb").checked)

  if (firstName == "" || lastName == "" || password == "" || userName == "" || tcNo == "" || phone == "" || email == "" || address == "" || !document.getElementById("cb").checked) {
    return window.alert("Zorunlu bütün alanları doldurunuz");
  }

  const newPost = {
    first_name: firstName,
    last_name: lastName,
    password: password,
    username: userName,
    tc_no: tcNo,
    phone: phone,
    email: email,
    address: address
  }

  fetch("http://localhost:4444/api/auth/", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log(user)
      if (user.username == userName) {
        window.alert("kayıt edildi");
      }
      else {
        window.alert("Bu kullanıcı adı kullanılıyor");
      }
    })
}




