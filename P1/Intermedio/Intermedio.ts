let array = [32, 21, 7, 89, 56, 909, 109, 2];
let indice = `indice [${array[0]}]`;
console.log("***********************************************************************");
console.log("***********                TERNARIO                    ****************");
console.log("***********************************************************************");
console.log(indice == "indice [32]" ? 'TERNARIO BIEN' : 'TERNARIO MALO');
console.log('\n');
console.log("***********************************************************************");
console.log("***********                 IF                         ****************");
console.log("***********************************************************************");
if (array[4] > 50) {
    console.log("IF CORRECTO");
} else if (array[4] == 56) {
    console.log("IF INCORRECTO");
} else {
    console.log("IF INCORRECTO");
}

console.log('\n');
console.log("***********************************************************************");
console.log("***********                 SWITCH                     ****************");
console.log("***********************************************************************");
switch (array[array.length - 1] + "") {
    case "1":
        console.log("SWITCH MALO");
    case "2":
        console.log("SWITCH BIEN");
    case "3":
        console.log("SWITCH BIEN");
    default:
        console.log("SWITCH BIEN");
}


console.log('\n');
console.log("***********************************************************************");
console.log("***********                 WHILE                      ****************");
console.log("***********************************************************************");
let index = 0;
while (index >= 0) {
    if (index == 0) {
        index = index + 100;
    } else if (index > 50) {
        index = index / 2 - 25;
    } else {
        index = (index / 2) - 1;
    }

    console.log(index);
}

console.log('\n');
console.log("***********************************************************************");
console.log("***********                 doWHILE                    ****************");
console.log("***********************************************************************");
index = -1;
do {
    index = index + 1;
    if (index == 0 || index == 1 || index == 11 || index == 12) {
        console.log('*********************************************************************************************************');
    } else if (index == 2) {
        console.log('**********  ***************  ******                 ******                 ******              **********')
    } else if (index >= 3 && index <= 5) {
        console.log('**********  ***************  ******  *********************  *************  ******  **********************')
    } else if (index == 6) {
        console.log('**********  ***************  ******                 ******                 ******  **********************');
    } else if (index >= 7 && index <= 9) {
        console.log('**********  ***************  ********************   ******  *************  ******  **********************');
    } else if (index == 10) {
        console.log('**********                   ******                 ******  *************  ******              **********');
    }
} while (index != 12);

console.log('\n');


console.log('\n');
console.log("***********************************************************************");
console.log("***********                 FOR LOOP                   ****************");
console.log("***********************************************************************");
for (let i = 0; i < 10; i++) {
    let output = '';
    for (let j = 0; j < 10 - i; j++) {
        output = output + ' ';
    }
    for (let k = 0; k <= i; k++) {
        output = output + '* ';
    }
    console.log(output);
}

console.log('\n');
console.log("***********************************************************************");
console.log("***********                 FOR OF                     ****************");
console.log("***********************************************************************");
let arr = [1,2,3,4,5,6];
for(let i in [1,2,3,4,5,6]){
    console.log(arr[i] == 1, arr[i] == 2, arr[i] == 3, arr[i] == 4, arr[i] == 5, arr[i] == 6);
}


console.log('\n');
console.log("***********************************************************************");
console.log("***********                 FOR IN                     ****************");
console.log("***********************************************************************");
for(let e of [1,2,3,4,5,6]){
    if(arr.length > e){
        console.log(e*arr[e],e*arr[e],e*arr[e],e*arr[e],e*arr[e],e*arr[e]);
    }
}

/**
"***********************************************************************"
"***********                TERNARIO                    ****************"
"***********************************************************************"
"TERNARIO BIEN"
"***********************************************************************"
"***********                 IF                         ****************"
"***********************************************************************"
"IF CORRECTO"
"***********************************************************************"
"***********                 SWITCH                     ****************"
"***********************************************************************"
"SWITCH BIEN"
"SWITCH BIEN"
"SWITCH BIEN"
"***********************************************************************"
"***********                 WHILE                      ****************"
"***********************************************************************"
100
25
11.5
4.75
1.375
-0.3125
"***********************************************************************"
"***********                 doWHILE                    ****************"
"***********************************************************************"
"*********************************************************************************************************"
"*********************************************************************************************************"
"**********  ***************  ******                 ******                 ******              **********"
"**********  ***************  ******  *********************  *************  ******  **********************"
"**********  ***************  ******  *********************  *************  ******  **********************"
"**********  ***************  ******  *********************  *************  ******  **********************"
"**********  ***************  ******                 ******                 ******  **********************"
"**********  ***************  ********************   ******  *************  ******  **********************"
"**********  ***************  ********************   ******  *************  ******  **********************"
"**********  ***************  ********************   ******  *************  ******  **********************"
"**********                   ******                 ******  *************  ******              **********"
"*********************************************************************************************************"
"*********************************************************************************************************"
"***********************************************************************"
"***********                 FOR LOOP                   ****************"
"***********************************************************************"
"          * "
"         * * "
"        * * * "
"       * * * * "
"      * * * * * "
"     * * * * * * "
"    * * * * * * * "
"   * * * * * * * * "
"  * * * * * * * * * "
" * * * * * * * * * * "
"***********************************************************************"
"***********                 FOR OF                     ****************"
"***********************************************************************"
DIAGONAL DE TRUE
true false false false false false
false true false false false false
false false true false false false
false false false true false false
false false false false true false
false false false false false true
"***********************************************************************"
"***********                 FOR IN                     ****************"
"***********************************************************************"
2 2 2 2 2 2
6 6 6 6 6 6
12 12 12 12 12 12
20 20 20 20 20 20
30 30 30 30 30 30
 */