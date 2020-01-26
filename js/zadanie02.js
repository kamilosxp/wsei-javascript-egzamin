function concatArray(arr1, arr2) {
    for (const el in arr2)  
    {
        arr1.push(arr2[el]);
    }
    return arr1;
}
 
console.log(concatArray([1, 3], [3, 5]));