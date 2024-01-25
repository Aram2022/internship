// function deepFlatten(arr){
//     return arr.flat(Number.MAX_SAFE_INTEGER)
// }

function deepFlatten(arr) {
    return arr.reduce((acc, current) => {
      if (Array.isArray(current)) {
        return acc.concat(deepFlatten(current));
      } else {
        return acc.concat(current);
      }
    }, []);
}

console.log(deepFlatten( [1, [2, [3, [4]], 5]]));

  