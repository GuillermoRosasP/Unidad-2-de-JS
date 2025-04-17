// Función recursiva para encontrar el número máximo en un arreglo usando divide and conquer
const encontrarMaximo = (arr, inicio = 0, fin = arr.length - 1) => {
    // Caso base: solo hay un elemento
    if (inicio === fin) return arr[inicio];
  
    // Dividir el arreglo en dos mitades
    const medio = Math.floor((inicio + fin) / 2);
  
    // Buscar el máximo en cada mitad
    const maxIzquierda = encontrarMaximo(arr, inicio, medio);
    const maxDerecha = encontrarMaximo(arr, medio + 1, fin);
  
    // Combinar: devolver el máximo entre los dos
    return Math.max(maxIzquierda, maxDerecha);
  };
  
  // Ejemplo de uso
  const numeros = [23, 87, 12, 45, 98, 3, 76, 150, 4];
  const maximo = encontrarMaximo(numeros);
  console.log(`El número máximo es: ${maximo}`);
  