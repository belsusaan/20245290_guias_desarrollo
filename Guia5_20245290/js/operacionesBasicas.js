// accedemos al parrafo que nos permitira imprimir el resultado
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

// accedemos a cada botón por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

// agregamos el evento click a los botones, adicionalmente se le asigna la funcion que realizará la operación
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

let resultado;

function sumar() {
  let numero1 = parseFloat(prompt("Ingrese el primero número a sumar"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número a sumar"));
  resultado = numero1 + numero2;
  parrafo.innerHTML = `${numero1} + ${numero2} = ${resultado}`;
}

function restar() {
  let numero1 = parseFloat(prompt("Ingrese el primero número a restar"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número a restar"));
  resultado = numero1 - numero2;
  parrafo.innerHTML = `${numero1} - ${numero2} = ${resultado}`;
}

function multiplicar() {
  let numero1 = parseFloat(prompt("Ingrese el primero número a multiplicar"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número a multiplicar"));
  resultado = numero1 * numero2;
  parrafo.innerHTML = `${numero1} x ${numero2} = ${resultado}`;
}
function dividir() {
  let numero1 = parseFloat(prompt("Ingrese el primero número a dividir"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número a dividir"));
  let mensaje;
  if (numero2 != 0) {
    resultado = numero1 / numero2;
    mensaje = `${numero1} / ${numero2} = ${resultado}`;
  } else {
    mensaje = `El valor ${numero1} / ${numero2} = ${resultado} no se puede dividir`;
  }
  parrafo.innerHTML = mensaje;
}
