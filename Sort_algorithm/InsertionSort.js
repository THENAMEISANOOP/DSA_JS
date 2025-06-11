function InsertionSort(arr){
    
    for(let i=0;i<arr.length;i++){
        let numtoinsert=arr[i];
        let j=i-1;
        while(j>=0&&arr[j]>numtoinsert){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=numtoinsert
    }
}
const arr=[4,3,5,2,1];
InsertionSort(arr);
console.log(arr)


// [4] [3] [5] [2] [1]
//  ↑
//  i = 0 (1st element is always considered sorted)


// [4] [3] [5] [2] [1]
//      ↑

// → Shift:
// [4] [4] [5] [2] [1]

// → Insert 3:
// [3] [4] [5] [2] [1]


// [3] [4] [5] [2] [1]
//              ↑

// [3] [4] [5] [2] [1]
//                  ↑

// → Shift 5:
// [3] [4] [5] [5] [1]

// → Shift 4:
// [3] [4] [4] [5] [1]

// → Shift 3:
// [3] [3] [4] [5] [1]

// → Insert 2:
// [2] [3] [4] [5] [1]


// [2] [3] [4] [5] [1]
//                    ↑

// → Shift 5:
// [2] [3] [4] [5] [5]

// → Shift 4:
// [2] [3] [4] [4] [5]

// → Shift 3:
// [2] [3] [3] [4] [5]

// → Shift 2:
// [2] [2] [3] [4] [5]

// → Insert 1:
// [1] [2] [3] [4] [5]

// finall output
// [1, 2, 3, 4, 5]
