let arrayOrigin = [1,2,3,4,5,2,3,4,2];
let arrayStrings = ["Pato", "Gato", "Cachorro", "Gato"];
let testeMap = [1,2,3];
let arrayReduce = [1, 2, 3, 4];
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// function minhaCallBackForEach(element, index, array) {
//   array[index] = `Número ${element} na posição: ${index}, veio desse array: ${array}`;
// }

// function meuMetodoforEach(array, callback) {
//     for(let index = 0; index < array.length; index++){
//         const currentValue = array[index]
//         callback(currentValue, index, array)
//     }
//   }

// meuMetodoforEach(array, minhaCallBackForEach)
// console.table(array)

//Função Find

function meuMetodoFind (array, callback, valor){
    for (let i = 0; i < array.length; i++){
        if (callback(valor, i, array )){
            return array[i];
        }
    }
}

function callBackFind (element, index, array){
    return element === array[index];
}

console.log(meuMetodoFind(arrayOrigin, callBackFind, 2));

//Função Filter

function meuMetodoFilter (array, callback, valor){
    let outPut = [];
    for (let i = 0; i < array.length; i++){
        if (callback(valor, i, array)){
            outPut.push(array[i]);
        }
    }
    return outPut;
}

function callBackFilter (element, index, array){
    return element === array[index];
}

console.log(meuMetodoFilter(arrayOrigin, callBackFilter, 2));
console.log(meuMetodoFilter(arrayStrings, callBackFilter, "Gato"));

//Função Map

function meuMetodoMap (array, callback){
    let outPut = [];
    for (let i = 0; i < array.length; i++){
        outPut.push(callback(array[i], i, array));
    }
    return outPut;
}

function callBackMap (element, index, array){
    return element * array[index];
}

console.log(meuMetodoMap(testeMap, callBackMap));

//Função Reduce

function meuMetodoReduce (array, callback, valorInicial){
    let outPut = 0;
    for (let i = 0; i < array.length; i++){
        outPut += callback(valorInicial, i, array);
    }

    return outPut;
}

function callBackReduce (element, index, array){
    return element + array[index];
}

console.log(meuMetodoReduce(arrayReduce, callBackReduce, 0));

//Função Includes

function meuMetodoIncludes (array, callback, valor){
    for (let i = 0; i < array.length; i++){
        if(callback(valor, i, array)){
            return true;
        }
    }

    return false;
}

function callBackIncludes (element, index, array){
    return element === array[index];
}

console.log(meuMetodoIncludes(arrayReduce, callBackIncludes, 1));
console.log(meuMetodoIncludes(arrayStrings, callBackIncludes, "Gato"));

//Função IndexOf

function meuMetodoIndexOf(array, callback, valor, indice){
    if(indice != 0){
        for (let i = indice; i < array.length; i++){
            if((callback(valor, i, array ))){
                return i;
            }
        }
    }else {
        for (let i = 0; i < array.length; i++){
            if((callback(valor, i-indice, array ))){
                return i;
            }
        }
    }
    
    return -1;
}

function callBackIndexOf(element, index, array){
    return element === array[index];
}

console.log(meuMetodoIndexOf(beasts, callBackIndexOf, "bison", 0));
console.log(meuMetodoIndexOf(beasts, callBackIndexOf, "bison", 2))