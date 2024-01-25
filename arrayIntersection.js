function arrayIntersection(arr1, arr2){
    let newArr = [];
    arr1.forEach(el => {
        if(arr2.includes(el) && !newArr.includes(el)) newArr.push(el);
    }); 

    return newArr;
}

const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];
console.log(arrayIntersection(nums1, nums2));
// Output: [3, 4]