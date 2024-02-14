const solicitarNumero = () => {
  let numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
  if (isNaN(numero) || numero < 1 || numero > 20) {
    alert("Número fuera del rango");
  } else {
    return numero;
  }
};

const calcularFactorial = (numero) => {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
};

const mostrarResultados = (numero) => {
  for (let i = 1; i <= numero; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(`Factorial de ${i}: ${calcularFactorial(i)}`);
  }
};

const numero = solicitarNumero();
if (numero !== -1) {
  mostrarResultados(numero);
}


/* function solicitarNumero() {
  do{
    numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
  } while (isNaN(numero) || numero < 1 || numero > 20);
  console.log(numero);
  return numero;  
}

/* const solicitarNumero = () => {
    let numero;
    do {
      numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
    } while (isNaN(numero) || numero < 1 || numero > 20);
    return numero;
  }; */


/* function solicitarNumero() {

  let numero;
  let intentos = 0;

  do {
    numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
    intentos++;
  } while (isNaN(numero) || numero < 1 || numero > 20 && intentos < 1);

  if (isNaN(numero) || numero < 1 || numero > 20) {
    alert("Número fuera del rango");
    return -1;
  } else {
    return numero;
  }
}

const numero = solicitarNumero();

if (numero === -1) {
  console.log("Número fuera del rango");
  solicitarNumero();
} else {
  console.log(`El número introducido es: ${numero}`);
}

 */


/* const solicitarNumero = () => {
  let numero;
  let intentos = 0;

  do {
    numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
    intentos++;
  } while (isNaN(numero) || numero < 1 || numero > 20 && intentos < 1);

  if (isNaN(numero) || numero < 1 || numero > 20) {
    alert("Número fuera del rango");
    return -1;
  } else {
    return numero;
  }
};

const numero = solicitarNumero();

if (numero === -1) {
  console.log("Número fuera del rango");
  solicitarNumero();
} else {
  console.log(`Número ingresado: ${numero}`);
}
 */


