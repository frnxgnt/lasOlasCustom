// Variables globales
let enero = "";
let febrero = "";
let marzo = "";
let abril = "";
let mayo = "";
let junio = "";
let julio = "";
let agosto = "";
let septiembre = "";
let octubre = "";
let noviembre = "";
let diciembre = "";
let resultado;
let mes = 1;

// Funcion matematica
function promedio() {
  resultado =
    parseInt(
      enero +
        febrero +
        marzo +
        abril +
        mayo +
        junio +
        julio +
        agosto +
        septiembre +
        octubre +
        noviembre +
        diciembre
    ) / 12;
  alert(`El promedio anual del nivel del rio fue de ${resultado} mts`);
}

// Funcion utilizando ciclo y condicional para cargar los datos
function ingresandoValores(mes) {
  for (mes >= 1; mes <= 12; mes++) {
    if (mes == 1) {
      enero = parseInt(prompt("Ingrese nivel Enero"));
    } else if (mes == 2) {
      febrero = parseInt(prompt("Ingrese nivel Febrero"));
    } else if (mes == 3) {
      marzo = parseInt(prompt("Ingrese nivel Marzo"));
    } else if (mes == 4) {
      abril = parseInt(prompt("Ingrese nivel Abril"));
    } else if (mes == 5) {
      mayo = parseInt(prompt("Ingrese nivel Mayo"));
    } else if (mes == 6) {
      junio = parseInt(prompt("Ingrese nivel Junio"));
    } else if (mes == 7) {
      julio = parseInt(prompt("Ingrese nivel Julio"));
    } else if (mes == 8) {
      agosto = parseInt(prompt("Ingrese nivel Agosto"));
    } else if (mes == 9) {
      septiembre = parseInt(prompt("Ingrese nivel Septiembre"));
    } else if (mes == 10) {
      octubre = parseInt(prompt("Ingrese nivel Octubre"));
    } else if (mes == 11) {
      noviembre = parseInt(prompt("Ingrese nivel Noviembre"));
    } else if (mes == 12) {
      diciembre = parseInt(prompt("Ingrese nivel Diciembre"));
    } else {
      alert("Mes incorrecto");
    }
  }
}

// Funcion para reinicar la páguna
function reiniciarPag() {
  location.reload();
}

let botonReiniciar = document.getElementById("boton-reiniciar");
botonReiniciar.addEventListener("click", reiniciarPag);

ingresandoValores(mes);
promedio();
