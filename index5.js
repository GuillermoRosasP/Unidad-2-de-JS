

// Función para encontrar la palabra más larga usando Sliding Window
const encontrarPalabraMasLarga = texto => {
    // Dividir el texto en palabras, eliminando signos de puntuación simples
    const palabras = texto.split(' ').map(palabra => palabra.replace(/[.,!?;:()]/g, ''));
    
    let palabraMasLarga = '';   // Ventana inicial (la palabra más larga encontrada hasta ahora)
  
    for (let inicio = 0; inicio < palabras.length; inicio++) {
      const palabraActual = palabras[inicio];
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;  // Actualiza la ventana si se encuentra una palabra más larga
      }
    }
  
    return palabraMasLarga;
  };
  
  // Ejemplo de uso
  const parrafo = "Esta es una prueba, Para ver cual es la palabra mas larga. ¿Cual será?";
  const resultado = encontrarPalabraMasLarga(parrafo);
  console.log(`La palabra más larga es: "${resultado}"`);
  