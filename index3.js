// Arreglo de objetos con productos
const productos = [
    { nombre: 'Camiseta', precio: 29.99, categoria: 'ropa' },
    { nombre: 'Pantalón', precio: 45.00, categoria: 'ropa' },
    { nombre: 'Zapatos', precio: 80.50, categoria: 'calzado' },
    { nombre: 'Reloj', precio: 120.00, categoria: 'accesorios' },
    { nombre: 'Gorra', precio: 15.75, categoria: 'accesorios' }
  ];
  
  // Filtrar los productos que cuesten menos de $100
  const productosMenos100 = productos.filter(producto => producto.precio < 100);
  
  // Ordenar alfabéticamente esos productos por su nombre
  const productosOrdenados = productosMenos100.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  // Generar un nuevo arreglo que contenga solo los nombres de los productos
  const nombresProductos = productosOrdenados.map(producto => producto.nombre);
  
  console.log("Lista de nombres de productos con precio menor a $100:");
  console.log(nombresProductos);
  