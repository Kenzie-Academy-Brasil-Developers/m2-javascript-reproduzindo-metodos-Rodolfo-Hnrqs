let arrayOrigin = [1,2,3,4,5,2,3,4,2];
let arrayStrings = ["Pato", "Gato", "Cachorro", "Gato"];
let testeMap = [1,2,3];
let arrayReduce = [1, 2, 3, 4];
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];


//Função Find

function meuMetodoFind (array, callback){
    for (let i = 0; i < array.length; i++){
        if (callback(2, i, array )){
            return array[i];
        }
    }
}

function callBackFind (element, index, array){
    return element === array[index];
}

console.log("Find:")
console.log(meuMetodoFind(arrayOrigin, callBackFind));

//Função Filter

function meuMetodoFilter (array, callback){
    let outPut = [];
    for (let i = 0; i < array.length; i++){
        if (callback("Gato", i, array)){
            outPut.push(array[i]);
        }
    }
    return outPut;
}

function callBackFilter (element, index, array){
    return element === array[index];
}

console.log("Filter:")
console.log(meuMetodoFilter(arrayStrings, callBackFilter));

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

console.log("Map:")
console.log(meuMetodoMap(testeMap, callBackMap));

//Função Reduce

function meuMetodoReduce (array, callback, valorInicial){
    let outPut = 0;
    if(valorInicial == null){
        valorInicial = 0;
    }else{
        outPut += valorInicial;
        valorInicial = 0;
    }
    for (let i = 0; i < array.length; i++){
        outPut += callback(valorInicial, i, array);
    }

    return outPut;
}

function callBackReduce (element, index, array){
    return element + array[index];
}

console.log("Método Reduce:")
console.log(meuMetodoReduce(arrayReduce, callBackReduce));

//Função Includes

function meuMetodoIncludes (array, element, index){
    if(index == null){
        index = 0;
    }
    for (let i = index; i < array.length; i++){
        if(callBackIncludes(element, i, array)){
            return true;
        }
    }

    return false;
}

function callBackIncludes (element, index, array){
    return element === array[index];
}

console.log("Includes:")
console.log(meuMetodoIncludes(arrayReduce, 2, 2));
console.log(meuMetodoIncludes(arrayStrings, "Gato"));

//Função IndexOf

function meuMetodoIndexOf(array, element, index){
    if (index == null){
        for (let i = 0; i < array.length; i++){
            if((callBackIndexOf(element, i, array ))){
                return i;
            }
        }
    }else {
        for(let i = index; i < array.length; i++){
            if((callBackIndexOf(element, i, array ))){
                return i;
            }
        }
    }
    
    return -1;
}

function callBackIndexOf(element, index, array){
    return element === array[index];
}

console.log("Index Of:")
console.log(meuMetodoIndexOf(beasts, "bison"));
console.log(meuMetodoIndexOf(beasts, "bison", 2))