function aviso() {
  alert("Bienvenido al mundo de JavaScript");
}

function confirmacion() {
  let confirmacion = confirm("¿Desea salir de la sesión?");

  alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
  let nombre = prompt("¿Cuál es su nombre?");
  let edad = prompt("¿Cuál es su edad?");

  alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo() {
  let parrafo = prompt(
    "Escriba la información que desea visualizar en el párrafo"
  );

  const p = document.querySelector("#idParrafo");
  p.innerHTML = parrafo;
}
