function customMap(arr, callback){
   
    if(!Array.isArray(arr) || typeof callback !== 'function'){
        throw new Error("syntax Error");
    }

    let newArr = [];

    arr.forEach( el => newArr.push(callback(el)));

    return newArr
}

const numbers = [1, 2, 3];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled);
// Output: [2, 4, 6]   

