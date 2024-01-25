function chunkArray(arr, n){
    let newArr = [];

    for(let i = 0; i < arr.length; i+=n){
        newArr.push(arr.slice(i, i+n));
    }

    return newArr
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(data, 3));
// [[1, 2, 3], [4, 5, 6], [7]]
