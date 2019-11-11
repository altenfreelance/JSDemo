function getDifferentNumber (arr) {
    // Get the smallest non negative integer NOT in the array
    // Max array value is 2^32 -1
    // Efficiency
    // You cannot modify the array
    
    let numHash = {}

    for(let i = 0; i< arr.length; i++){
        numHash[arr[i]] = true;
    }

    let curNum = 0;
    const MAX_INT = Math.pow(2,31) - 1
    while(curNum <= MAX_INT){
        if(!numHash[curNum]) return curNum;
        curNum++;
    }
    throw console.error("Reached maximum int value :" + MAX_INT);
}
let arr = [0,1,2,3,4,5,-67,67, 45];
console.log(getDifferentNumber(arr));