// Función que encuentra el primer par de invitados consecutivos
// cuyos nombres empiezan con la misma letra
const encontrarParConInicialComun = (invitados) => {
    // Recorremos el arreglo usando índices; el puntero "i" representa el actual,
    // y "i+1" el siguiente elemento
    for (let i = 0; i < invitados.length - 1; i++) {
      // Obtenemos los dos nombres consecutivos
      const invitadoActual = invitados[i];
      const siguienteInvitado = invitados[i + 1];
  
      // Convertimos la primera letra de ambos nombres a mayúsculas para asegurar la comparación
      const inicialActual = invitadoActual.charAt(0).toUpperCase();
      const inicialSiguiente = siguienteInvitado.charAt(0).toUpperCase();
  
      // Comparamos las iniciales
      if (inicialActual === inicialSiguiente) {
        // Si coinciden, devolvemos el par encontrado
        return [invitadoActual, siguienteInvitado];
      }
    }
    // Si no se encuentra ningún par, retornamos null
    return null;
  };
  
  // Uso con Const:
  const listaDeInvitados = [
    "Ana",
    "Bernardo",
    "Carlos",
    "Claudia",
    "Daniel",
    "Elena"
  ];
  
  // La lista debe estar ordenada alfabéticamente, si no lo está, se puede ordenar con sort():
  // listaDeInvitados.sort((a, b) => a.localeCompare(b));
  
  const parEncontrado = encontrarParConInicialComun(listaDeInvitados);
  
  if (parEncontrado) {
    console.log(`El primer par de invitados con la misma inicial es: ${parEncontrado[0]} y ${parEncontrado[1]}`);
  } else {
    console.log("No se encontró ningún par de invitados consecutivos que compartan la misma inicial.");
  }
  

  //console.log("Lista de Invitados:");
  //listaDeInvitados.forEach(invitado => console.log(invitado));//
