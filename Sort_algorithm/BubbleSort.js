function BubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
const arr = [5, 3, 8, 4];
BubbleSort(arr);
console.log(arr);





// Pass 1:
// ┌───┬───┬───┬───┐
// │ 5 │ 3 │ 8 │ 4 │
// └───┴───┴───┴───┘
//      ↑   swap  → 5 > 3
// ┌───┬───┬───┬───┐
// │ 3 │ 5 │ 8 │ 4 │
// └───┴───┴───┴───┘
//              ↑   swap  → 8 > 4
// ┌───┬───┬───┬───┐
// │ 3 │ 5 │ 4 │ 8 │
// └───┴───┴───┴───┘

// Pass 2:
//         ↑   swap  → 5 > 4
// ┌───┬───┬───┬───┐
// │ 3 │ 4 │ 5 │ 8 │
// └───┴───┴───┴───┘

// No swaps in Pass 3 → Array is sorted ✅
