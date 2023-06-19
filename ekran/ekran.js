function ekle() {
    //id yakalıyom
    var urlParams = new URLSearchParams(window.location.search);
    var userId = urlParams.get("user");
    console.log(userId); 

    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var aciklama = document.getElementById("aciklama").value;
    var tip = document.getElementById("tip").value;

   
    if (date == "" || time == "" || aciklama == "" || tip == "" ) {
        return window.alert("Zorunlu bütün alanları doldurunuz");
      }

    const newPost = {
        user_id :userId,
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
        if(event.description==aciklama){
         window.alert("Plan başarıyla tanımlandı")
        }
        else{
            window.alert("Günümüz tarihinden önceye plan tanımlayamazsınız")
        }
    })
    
    }

    function veriCek(){

        fetch("http://localhost:4444/api/event", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then(response => response.json())
            .then(user => {
              console.log(user)
            })
    }

