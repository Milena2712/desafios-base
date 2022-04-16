function insert(num) {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado == "Nada para calcular") {
    clean();
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
  } else {
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
  }
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    let resultado = document.querySelector("#resultado");
    resultado.classList.add("resultadoVazio");
    document.getElementById("resultado").innerHTML = "Nada para calcular";
  }
}
