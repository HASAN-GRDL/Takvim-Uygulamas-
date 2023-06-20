function ekle() {
  //id yakalıyom
  var urlParams = new URLSearchParams(window.location.search);
  var userId = urlParams.get("user");
  console.log(userId);

  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var aciklama = document.getElementById("aciklama").value;
  var tip = document.getElementById("tip").value;


  if (date == "" || time == "" || aciklama == "" || tip == "") {
    return window.alert("Zorunlu bütün alanları doldurunuz");
  }

  const newPost = {
    user_id: userId,
    date,
    time,
    description: aciklama,
    type: tip

  }

  fetch("http://localhost:4444/api/event", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(event => {
      if (event.description == aciklama) {
        window.alert("Plan başarıyla tanımlandı")
      }
      else {
        window.alert("Günümüz tarihinden önceye plan tanımlayamazsınız")
      }
    })

}

function veriCek() {
  var urlParams = new URLSearchParams(window.location.search);
  var userId = urlParams.get("user");
  console.log(userId);

  fetch("http://localhost:4444/api/event?userId=" + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log(user);

       var tablo = document.getElementById("myTable");
      tablo.style.visibility = "visible";

      for (let index = 0; index < user.length; index++) {
        
         const tr = document.createElement("tr");

      var tipDeger = user[index].type;
      const tip = document.createElement("td");
      const textTip = document.createTextNode(tipDeger);
      tip.appendChild(textTip);

      tr.appendChild(tip);

      var tarihDeger = user[index].date;
      const tarih = document.createElement("td");
      const textTarih = document.createTextNode(tarihDeger);
      tarih.appendChild(textTarih);

      tr.appendChild(tarih);

      var saatDeger = user[index].time;
      const saat = document.createElement("td");
      const textSaat = document.createTextNode(saatDeger);
      saat.appendChild(textSaat);

      tr.appendChild(saat);

      var aciklamaDeger = user[index].description;
      const aciklama = document.createElement("td");
      const textAciklama = document.createTextNode(aciklamaDeger);
      aciklama.appendChild(textAciklama);

      tr.appendChild(aciklama);

      document.getElementById("myTable").appendChild(tr);

      }

      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
      document.getElementById("aciklama").value = "";
      document.getElementById("tip").value = "";
    })
    .catch(error => {
      console.error("Error:", error);
    });
}



