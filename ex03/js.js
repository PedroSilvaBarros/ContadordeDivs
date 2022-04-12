const texto = document.getElementById("input");
const btCont = document.getElementById("btnCont");

let cont = 0;
let id = 0;

function criarIncremento() {

  let id = getProxInd();

  const texto = document.getElementById("input").value;
  const newDiv = document.createElement("div");
  const btCont = document.createElement("btnCont");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p2.id = ++id;

  p1.innerHTML = texto;
  btCont.innerHTML = "ZERAR";
  p2.innerHTML = cont;

  newDiv.onclick = function () {
    incremento(p2);
  };

  btCont.onclick = function () {
    zerarCont();
  };

  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.appendChild(btCont);

  newDiv.style.background = randomCor();

  document.querySelector(".spaceDivs").appendChild(newDiv);
}

function getProxInd() {
  return ++id;
}

function incremento(event) {
  event.innerHTML = cont++;
}

function zerarCont() {
  cont = 0;
}

function randomCor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
