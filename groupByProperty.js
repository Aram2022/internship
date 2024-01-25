function groupByProperty(arr, prop){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        for(let key in arr[i]){
            if(key === prop){
                if(obj[arr[i][key].toString()]){
                    obj[arr[i][key].toString()].push(arr[i])
                }
                else obj[arr[i][key].toString()] = [arr[i]];
            }
        }
    }
    return obj;
}


const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];

console.log(groupByProperty(people, 'age'));
