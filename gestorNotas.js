//Proyecto 8

//Estructura básica en gestorNotas.js
const fs = require('fs');

// Leer las notas del archivo JSON
const leerNotas = () => {
  const data = fs.readFileSync('notas.json', 'utf8');
  return JSON.parse(data);
};

// Guardar notas en el archivo JSON
const guardarNotas = (notas) => {
  fs.writeFileSync('notas.json', JSON.stringify(notas, null, 2));
};



//Función para crear una nueva nota
const crearNota = (titulo, contenido) => {
    const notas = leerNotas();
    const duplicada = notas.find(nota => nota.titulo === titulo);
  
    if (duplicada) {
      console.log('❌ Ya existe una nota con ese título.');
      return;
    }
  
    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log('✅ Nota creada correctamente.');
  };
  

// Función para listar todas las notas
const listarNotas = () => {
    const notas = leerNotas();
  
    if (notas.length === 0) {
      console.log('📭 No hay notas guardadas.');
      return;
    }
  
    console.log('📝 Tus notas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  };
  


// Función para eliminar una nota por título
const eliminarNota = (titulo) => {
    const notas = leerNotas();
    const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);
  
    if (notas.length === nuevasNotas.length) {
      console.log('⚠️ Nota no encontrada.');
      return;
    }
  
    guardarNotas(nuevasNotas);
    console.log('🗑️ Nota eliminada correctamente.');
  };



  const [,, comando, titulo, ...contenido] = process.argv;
  const texto = contenido.join(' ');
  
  switch (comando) {
    case 'crear':
      crearNota(titulo, texto);
      break;
    case 'listar':
      listarNotas();
      break;
    case 'eliminar':
      eliminarNota(titulo);
      break;
    default:
      console.log('❓ Comando no reconocido. Usa "crear", "listar" o "eliminar".');
  }

  
  console.log('🔧 Comando:', comando, 'Título:', titulo, 'Contenido:', texto);



