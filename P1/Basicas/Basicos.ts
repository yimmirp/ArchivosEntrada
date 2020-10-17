let val1 = 0;
let val2 = 0;
let val3 = 0;
let a = 0;
let b = 0;

val1 = 7 - (5 + 10 * (20 / 5 - 2 + 4 * (5 + 2 * 3)) - 8 * 3 ** 2) + 50 * (6 * 2); //214
val2 = 2 ** 4 - 9 * (8 - 6 * (3 ** 2 - 6 * 5 - 7 * (9 + 7 ** 3) + 10) - 5 ) + 8 * (36 / 6 - 5 * ( 2 * 3)); //-133853
//TODO: CAMBIO LAS POTENCIAS DECIMALES (36**0.5) (16**0.5)
val3 = (8 ** 3 * 6 - 2 ** 5 + 2 ** 3 + 4 + 2) / 3; //-1018 
//let val4 = val1+val2+val3+val4; //Error, comentar despues de reportar
//let val4 = val1 - val2 + val3; //El resultado es 135085
if((val1 - val2 + val3) == 135085){
  console.log("Aritmeticas 100");
}

let String_3: string;
let String_4: string;
let int2_:number;
let TRUE :boolean = true;
let FALSE :boolean = false;
int2_ = 45;
int2_ --; 

String_3 = (int2_ > 77 || FALSE) + "," + (int2_ < 78 && TRUE) + "," + ((int2_ + 10) <= int2_ || FALSE) + "," + (!!!!!!!!!!!! (int2_ + 10 >= int2_));
String_4 = (int2_ >= 77 || (-1 < 100)) + "," + ((int2_ > 78) && (100 + 0));

console.log("Lógica 1" + " = " + String_3); //false,true,false,true
console.log("Lógica 2" + " = " + String_4); //true,false



//TODO: REEMPLACE 44.3 < 44.4  y el modulo 2%1 por 0
let relacionaes : boolean = (a == 0) != (true) == (2**5 == (31 + 0));
relacionaes = relacionaes == (b == a) != ((532 > 532)) == (String_3 == "false,true,false,true") == (String_4 == "true,false");
if(relacionaes){
  console.log("Relacionels 100");
}
else{
  console.log("Relacionales 0");
}


/***********************/
//TODO:DESCOMENTAR
const dimension = 3;

//Error porque una constante debe estar asginada
//Si no reporta el error -0.5 en declaracion de variables
//const dim2;
let arreglo : string[] = ["Estudiante1", "Estudiante2", "Estudiante3"];
//Posicion 0 - 2 para estudiante 1
//Posicion 3 - 5 para estudiante 2
//Posicion 6 - 8 para estudiante 3
let tablero : number[] = [0,0,0,0,0,0,0,0,0];
let estado : boolean[] = [false, false, false, false, false, false, false, false, false];



//TODO: ESTO NO PORQUE NO PUEDO LLAMAR AL ARREGLO DE ESA FORMA
function agregar(i : number, j : number, nota : number) : boolean{
  if(!estado[i * dimension + j]){
    tablero[i * dimension + j] = nota;
    estado[i*dimension + j] = true;
    return true;
  }
  console.log("Posicion ocupada");
  return false;
}

function imprimirPromedio(estudiante : number){
  let promedio = (tablero[estudiante * dimension + 0] + tablero[estudiante * dimension + 1] + tablero[estudiante * dimension + 2])/3;
  console.log("Promedio Estudiante ", arreglo[estudiante], " = ", promedio);
}

//Error porque es una constante
//Si no reporta el error -0.5 en asignacion de variables
//TODO: DESCOMENTAR
//dimension = 30;

//Notas estudiante 1
agregar(0,0, 90);
agregar(0,1, 95);
agregar(0,2, 92);

//Notas estudiante 2
agregar(1,0, 85);
agregar(1,1, 90);
agregar(1,2, 100);

//Notas estudiante 3
agregar(2,0, 20);
agregar(2,1, 100);
agregar(2,2, 100);

//Imprimir Promedios
imprimirPromedio(0); //92.33 -> + 0.5
imprimirPromedio(1); //91.66 -> + 0.5
imprimirPromedio(2); //70 -> + 0.5

//Debe imprimir posicion ocupada -> + 0.5
agregar(2,0, -1);
