function encontrarPalabra (str) {
    let palabras = str.split(" ");
    let palabraLarga = "";
    for(let i = 0; i < palabras.length; i++){
      if(palabras[i].length > palabraLarga.length){
          palabraLarga = palabras[i];
      }
    }
    return palabraLarga;
  }
  console.log(encontrarPalabra("Mi nombre es Maximiliano"))