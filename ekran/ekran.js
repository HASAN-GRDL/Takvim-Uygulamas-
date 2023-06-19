function ekle() {
    var tablo = document.getElementById("myTable");
    tablo.style.visibility = "visible";

    const tr = document.createElement("tr");
    
    var tipdeger = document.getElementById("tip").value;
    const tip = document.createElement("td");
    const textTip = document.createTextNode(tipdeger);
    tip.appendChild(textTip);
    
    var datedeger = document.getElementById("date").value;
    const date = document.createElement("td");
    const textDate = document.createTextNode(datedeger);
    date.appendChild(textDate);


    var timedeger = document.getElementById("time").value;
    const time = document.createElement("td");
    const textTime = document.createTextNode(timedeger);
    time.appendChild(textTime);
    
    var descriptionDeger = document.getElementById("aciklama").value;
    const description = document.createElement("td");
    const textDescription = document.createTextNode(descriptionDeger);
    description.appendChild(textDescription);

    
    tr.appendChild(tip);
    tr.appendChild(date);
    tr.appendChild(time);
    tr.appendChild(description);
    document.getElementById("myTable").appendChild(tr);
    
    document.getElementById("date").value="";
    document.getElementById("time").value="";
    document.getElementById("aciklama").value="";
    document.getElementById("tip").value="";
    
    }

