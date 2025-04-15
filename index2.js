// Lista de compras vacía
let listaDeCompras = [];

// Función para agregar un producto (evita duplicados)
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`✅ "${producto}" ha sido agregado a la lista.`);
  } else {
    console.log(`⚠️ "${producto}" ya está en la lista.`);
  }
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`🗑️ "${producto}" ha sido eliminado de la lista.`);
  } else {
    console.log(`❌ "${producto}" no se encontró en la lista.`);
  }
};

// Función para mostrar todos los productos
const mostrarLista = () => {
  console.log("🛒 Lista de Compras:");
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía.");
  } else {
    listaDeCompras.forEach((producto, i) => {
      console.log(`${i + 1}. ${producto}`);
    });
  }
};

// Ejemplo de uso:
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Leche"); // Producto duplicado
mostrarLista();
eliminarProducto("Pan");
mostrarLista();
