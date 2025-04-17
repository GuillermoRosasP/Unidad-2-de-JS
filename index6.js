

// Función recursiva para buscar todas las apariciones del regalo y contar cuántas veces aparece
const buscarTodosLosRegalos = (lista, regaloBuscado, indice = 0, posiciones = []) => {
    // Caso base: fin de la lista
    if (indice >= lista.length) {
      if (posiciones.length > 0) {
        return `El regalo "${regaloBuscado}" aparece ${posiciones.length} veces en las posiciones: ${posiciones.join(', ')}.`;
      } else {
        return `El regalo "${regaloBuscado}" no está en la lista.`;
      }
    }
  
    // Si encontramos el regalo, agregamos la posición
    if (lista[indice] === regaloBuscado) {
      posiciones.push(indice);
    }
  
    // Llamada recursiva
    return buscarTodosLosRegalos(lista, regaloBuscado, indice + 1, posiciones);
  };
  
  // Ejemplo de uso
  const listaDeRegalos = ['peluche', 'libro', 'chocolate', 'libro', 'juguete', 'libro'];
  const regalo = 'libro';
  
  const resultado = buscarTodosLosRegalos(listaDeRegalos, regalo);
  console.log(resultado);
  