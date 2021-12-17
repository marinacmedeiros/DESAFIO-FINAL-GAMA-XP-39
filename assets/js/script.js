sendButton = document.getElementById("#btn-final");
oldBody = document.getElementById("old-body");
newBody = document.getElementById("new-body");
listOfItens = [];

sendButton.onclick = function (e) {
  let mkt = 0;
  let hacker = 0;
  let designer = 0;
  let hustler = 0;
  e.preventDefault();

  const radioOptions = document.querySelectorAll("#allOptions");
  let selectedValue;
  for (const selected of radioOptions) {
    if (selected.checked) {
      selectedValue = selected.value;
      console.log(selectedValue);
      listOfItens.push(selectedValue);
    }
  }
  if (listOfItens.length < 10) {
    alert("Você deve marcar todas opções!");
    newBody.style.display = "none";
    oldBody.style.display = "block";
    return;
  }

  newBody.style.display = "block";
  oldBody.style.display = "none";

  if (listOfItens.length > 10) {
    listOfItens = listOfItens.slice(0, 10);
  }

  console.log(listOfItens)

  for (let index = 0; index < listOfItens.length; index++) {
    if (listOfItens[index] === "desenvolver") {
      hacker += 10;
    }
    if (listOfItens[index] === "inside sales") {
      hustler += 10;
    }
    if (listOfItens[index] === "marketing") {
      mkt += 10;
    }
    if (listOfItens[index] === "product design") {
      designer += 10;
    }
  }

  resultado = {
    dev: String(hacker),
    hustler: String(hustler),
    mkt: String(mkt),
    hipster: String(designer),
  };

  criaElemento();
};

function criaElemento() {
  const criaHacker = document.querySelector("#hacker");
  const criaMkt = document.querySelector("#mkt");
  const criaVendas = document.querySelector("#inside-sales");
  const criaDesigner = document.querySelector("#designer");

  const pegaHacker = document.querySelector("#hacker-result");
  const pegaMkt = document.querySelector("#mkt-result");
  const pegaVendas = document.querySelector("#vendas-result");
  const pegaDesign = document.querySelector("#designer-result");

  window.scrollTo(0, 150);

  criaHacker.innerText = `${resultado.dev}% Developer Fullstack`;
  criaMkt.innerText = `${resultado.mkt}% Product Design`;
  criaVendas.innerText = `${resultado.hustler}% Grow Hacking`;
  criaDesigner.innerText = `${resultado.hipster}% Inside Sales`;
}
