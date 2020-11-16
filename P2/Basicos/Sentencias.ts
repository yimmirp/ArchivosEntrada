console.log("------------- Ciclos -------------------");
let iter = 0;
let str2: string = "DO WHILE\n";

do { 

  iter=iter +1;

  if ((iter > 0) && (iter <= 5)) {
    str2 = str2 + "\tCINCO VECES ESTO\n";
  }

  if ((iter > 5 )&& (iter <= 10)) {
    if (iter == 6) {
      str2 = str2 + "\t";
    }
    str2 = str2 + iter + " ";
    if (iter == 10) {
      str2 = str2 + "\n";
    }
  }

  if ((iter > 10) && (iter <= 15)) {
    if (iter == 11) {
      str2 = str2 + "\t";

    }
    str2 = str2 + (iter + 1) + " ";
  }


} while (iter < 15);

console.log(str2);






console.log("------------ WHILE ANIDADO ---------------");
iter = 0;
let iter2: number = 0;
while (iter < 5) {
  iter2 = 0;
  console.log("TABLA DEL " + iter);
  while (iter2 < 5) {
    console.log(iter + " x " + iter2 + " = " + (iter * iter2) + "\n");
    iter2++;
  }
  iter++;
}


console.log("------------ FOR ANIDADOS ---------------");
for (let i = 0; ((i < 10) && (param)); i++) {
  let output: string = "";
  for (let j = 0; j < ( 10 - i); j++) {
    output = output + " ";
  }

  for (let k = 0; k <= i; k++) {
    output = output + "* ";
  }

  console.log(output);
}

let ifs  = 0;
if (  ( (10 - 15) >= 0 ) && (44 == 44)   ) {
  ifs--;
}
else if(1==2 || 2==1){
  ifs--;
}
else {
  if (( (15 + 8) == (22 - 10 + 5 * 3 - 4) ) && ((13 * 0) > (-1) )) {
    if ( 10 != 9 ) {
      ifs = 100;
    }
    else {
    }
  }
  else {

  }
}


console.log("If: "+ ifs);


let n = 3;
let m = 1;





//n=1;
switch (n) {
  case 0:
    console.log("Switch 1 malo");
  case 3:
    let tern1 = n == 2 ? 30 : 40;
    let tern2 = n == 1 ? 20 : tern1 ;
    let tern3 =  n == 0 ? 10 : tern2 ;
    let val1=  tern3 == 40  ? "Correcto Ternario 1" : "Incorrecto Ternario1";
    console.log(val1);
    
    let tern4= tern3 == 40 ? "Correcto Ternario 2" : "Incorrecto Ternario 2";
    let val3 = tern3!= 40 ? "Incorrecto Ternario2" : tern4 ;
    console.log(val3);
    break;
  case 1:

  case 2:

  default:
    console.log("Switch 1 bueno");
}



n=1;
switch (n) {
  case 0:
    console.log("Switch 1 malo");
  case 3:
    let tern1 = n == 2 ? 30 : 40;
    let tern2 = n == 1 ? 20 : tern1 ;
    let tern3 =  n == 0 ? 10 : tern2 ;
    let val1=  tern3 == 40  ? "Correcto Ternario 1" : "Incorrecto Ternario1";
    console.log(val1);
    
    let tern4= tern3 == 40 ? "Correcto Ternario 2" : "Incorrecto Ternario 2";
    let val3 = tern3!= 40 ? "Incorrecto Ternario2" : tern4 ;
    console.log(val3);
    break;
  case 1:

  case 2:

  default:
    console.log("Switch 1 bueno");
}




