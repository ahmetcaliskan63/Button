var artir = document.getElementById("artir");
var azalt = document.getElementById("azalt");

var text = document.querySelector(".text");

artir.addEventListener("click", artirma);
azalt.addEventListener("click", azaltma);

var sayi = 0;
text.innerHTML = sayi;

function artirma() {
  sayi++;
  text.innerHTML = sayi;
  if (text.innerHTML > 0) {
    document.body.style.backgroundColor = "blue";
  } else if (text.innerHTML == 0) {
    document.body.style.backgroundColor = "white";
  }
}

function azaltma() {
  sayi--;
  text.innerHTML = sayi;
  if (text.innerHTML < 0) {
    document.body.style.backgroundColor = "red";
  } else if (text.innerHTML == 0) {
    document.body.style.backgroundColor = "white";
  }
}
