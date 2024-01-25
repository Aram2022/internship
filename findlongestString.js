function findLongestString(arr){
    let longString = arr[0];

    arr.forEach(el => {
        if(el.length > longString.length) longString = el;
    })

    return longString;
}

const strings = ["short", "medium length", "longest string"];
console.log(findLongestString(strings));
// Output: "longest string"