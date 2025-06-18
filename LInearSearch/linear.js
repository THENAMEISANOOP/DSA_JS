function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // return the index if found
        }
    }
    return -1; // not found
}

const arr1 = [10, 5, 3, 8, 6];
console.log(linearSearch(arr1, 8));  
console.log(linearSearch(arr1, 15)); 
