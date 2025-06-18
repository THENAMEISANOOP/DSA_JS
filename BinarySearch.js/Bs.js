function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // found
        } else if (arr[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    return -1; // not found
}

const arr2 = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr2, 7));   
console.log(binarySearch(arr2, 4));   
