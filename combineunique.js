function combineUnique(arr1, arr2){
    return arr1.concat(arr2).filter((el, i, arr) => arr.indexOf(el) === i);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2));
// Output: [1, 2, 3, 4]