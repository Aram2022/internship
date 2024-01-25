function customReduceRight(arr, callback, initialValue) {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new Error('Syntax Error');
    }

    const hasInitialValue = arguments.length >= 3;
    let accumulator = hasInitialValue ? initialValue : arr[arr.length - 1];
    let startIndex = hasInitialValue ? arr.length - 1 : arr.length - 2;

    for (let i = startIndex; i >= 0; i--) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

const array = [1, 2, 3, 4];
const sum = customReduceRight(array, (acc, value) => acc + value, 0);
console.log(sum);
// Output: 10

