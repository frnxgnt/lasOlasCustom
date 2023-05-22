class guitar {
  constructor(marca, modelo, precio) {
    this.marcaGuitar = marca;
    this.modeloGuitar = modelo;
    this.precioGuitar = precio;
  }
}

function agregarGuitar() {
  let marca = prompt("Ingrese marca de la guitarra");
  let modelo = prompt("Ingrese modelo de la guitarra");
  let precio = parseInt(prompt("Ingrese precio de la guitarra"));
  const newGuitar = new guitar(marca, modelo, precio);
  arrayCarrito.push(newGuitar);
  alert("Producto añadido al carro de compras");
}

function verCarritoCompra() {
  arrayCarrito.forEach((producto) => {
    alert(
      `Usted elegio ${producto.marcaGuitar} modelo ${producto.modeloGuitar} por el valor de ${producto.precioGuitar}`
    );
  });
}

function finalizarCompra() {
  const totalCompra = arrayCarrito.reduce((acc, prod) => acc + prod.precioGuitar, 0);
  alert(`El total de su compra es ${totalCompra}`);
  console.log(totalCompra);
}

let arrayCarrito = [];

let opcion = prompt(
  "Elija una opcion: \n 1: Cargar productos \n 2: Ver carrito \n 3: Finalizar compra \n 4: Salir"
);

while (opcion !== "4") {
  if (opcion === "1") {
    agregarGuitar();
  }
  if (opcion === "2") {
    verCarritoCompra();
  }
  if (opcion === "3") {
    finalizarCompra();
  }
  opcion = prompt(
    "Vuelva a elegir una opción: \n 1: Cargar productos \n 2: Ver carrito \n 3: Finalizar compra \n 4: Salir"
  );
}


alert("Gracias por su compra")