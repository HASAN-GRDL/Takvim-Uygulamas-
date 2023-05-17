function ekle() {
    var tablo = document.getElementById("myTable");
    tablo.style.visibility = "visible";

    const tr = document.createElement("tr");
    
    var userdeger = document.getElementById("isim").value;
    const user = document.createElement("th");
    const textUser = document.createTextNode(userdeger);
    user.appendChild(textUser);
    
    var datedeger = document.getElementById("date").value;
    const date = document.createElement("th");
    const textDate = document.createTextNode(datedeger);
    date.appendChild(textDate);


    var timedeger = document.getElementById("time").value;
    const time = document.createElement("th");
    const textTime = document.createTextNode(timedeger);
    time.appendChild(textTime);
    
    var descriptionDeger = document.getElementById("aciklama").value;
    const description = document.createElement("th");
    const textDescription = document.createTextNode(descriptionDeger);
    description.appendChild(textDescription);

    
    tr.appendChild(user);
    tr.appendChild(date);
    tr.appendChild(time);
    tr.appendChild(description);
    document.getElementById("myTable").appendChild(tr);
    
    document.getElementById("isim").value="";
    document.getElementById("date").value="";
    document.getElementById("aciklama").value="";
    
    
    }