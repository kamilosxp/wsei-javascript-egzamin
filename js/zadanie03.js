function bigestSumOfTwoElements(arr) {
    if (arr.length == 0) 
    {
        return false;
    }
    if (arr.length == 1) 
    {
      return arr[0];
    }
    else 
    { arr.sort();
      return arr[arr.length-1] + arr[arr.length-2];
    }
}
 
console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));