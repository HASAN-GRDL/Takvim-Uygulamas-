veriCek();
kullanici();

function ekle() {

  var urlParams = new URLSearchParams(window.location.search);
  var userId = urlParams.get("user");
  console.log(userId);

  var date = document.getElementById("date").value;
  var time = document.getElementById("stime").value;
  var aciklama = document.getElementById("aciklama").value;
  var tip = document.getElementById("tip").value;
  var end_time = document.getElementById("ftime").value;


  if (date == "" || time == "" || aciklama == "" || tip == ""|| end_time == "") {
    return window.alert("Zorunlu bütün alanları doldurunuz");
  }

  const newPost = {
    user_id: userId,
    date,
    time,
    description: aciklama,
    type: tip,
    end_time

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
        veriCek();
        document.getElementById("date").value = "";
        document.getElementById("stime").value = "";
        document.getElementById("ftime").value = "";
        document.getElementById("aciklama").value = "";
        document.getElementById("tip").value = ""; 
      }
      else {
        window.alert("Günümüz tarihinden önceye plan tanımlayamazsınız")
      }
    })



}

function veriCek(date) {

  var url = "";
  var urlParams = new URLSearchParams(window.location.search);
  var userId = urlParams.get("user");
  console.log(userId);

  if (date) {
    var queryDate = document.getElementById("fDate").value;
    url = `http://localhost:4444/api/event?userId=${userId}&date=${queryDate}`
  }
  else {
    url = `http://localhost:4444/api/event?userId=${userId}`
  }

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log(user);

      var tablo = document.getElementById("myTable");
      tablo.innerHTML = "<tr><th> ID </th><th> TİP </th><th> TARİH </th><th> BAŞLANGIÇ SAATİ</th><th>BİTİŞ SAATİ</th><th> FİYAT </th><th> AÇIKLAMA </th><th></th></tr>";
      
      for (let index = 0; index < user.length; index++) {

        const tr = document.createElement("tr");

      

        var idDeger = index + 1;
        const id = document.createElement("td");
        const textId = document.createTextNode(idDeger);
        id.appendChild(textId);

        tr.appendChild(id);
         

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

        var baslangicSaatDeger = user[index].time;
        const baslangicSaat = document.createElement("td");
        const textBaslangicSaat = document.createTextNode(baslangicSaatDeger);
        baslangicSaat.appendChild(textBaslangicSaat);

        tr.appendChild( baslangicSaat);

        var bitisSaatDeger = user[index].end_time;
        const bitisSaat = document.createElement("td");
        const textbitisSaat = document.createTextNode(bitisSaatDeger);
        bitisSaat.appendChild(textbitisSaat);

        tr.appendChild(bitisSaat);

        var fiyatDeger = user[index].price + " TL";
        const fiyat = document.createElement("td");
        const textFiyat = document.createTextNode(fiyatDeger);
        fiyat.appendChild(textFiyat);

        tr.appendChild(fiyat);

        var aciklamaDeger = user[index].description;
        const aciklama = document.createElement("td");
        const textAciklama = document.createTextNode(aciklamaDeger);
        aciklama.appendChild(textAciklama);

        tr.appendChild(aciklama);

        var btn = document.createElement("div");
        btn.setAttribute("class","btn btn-sm btn-danger");
        btn.setAttribute("id","btnSil");
        btn.innerText="SİL ";
        btn.onclick = ()=>{sil(user[index].id);}
    
        tr.appendChild(btn);

        tablo.appendChild(tr);

      }

    
      
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function kullanici() {
  var urlParams = new URLSearchParams(window.location.search);
  var userId = urlParams.get("user");
  console.log(userId);

  fetch("http://localhost:4444/api/auth/user/" + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log(user);
      var userType = user.user_type
      var h1 = document.getElementById("header");
      h1.innerHTML = "TKVM - " + userType.toUpperCase();

    })

}

function sil(id){
    fetch("http://localhost:4444/api/event/"+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  }) .then(()=>{
       veriCek();
    })
 
}




