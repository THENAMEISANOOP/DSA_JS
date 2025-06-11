function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
const arr = [5, 3, 8, 4];
console.log(QuickSort(arr));




// const arr = [5, 3, 8, 4];

// Choose Pivot = 5

// Partition:
// ┌───┬───┬───┬───┐
// │ 5 │ 3 │ 8 │ 4 │
// └───┴───┴───┴───┘
//        ↑       ↑
//    < pivot   > pivot

// Left = [3, 4], Right = [8]

// Sort Left:
// Pivot = 3 → compare 3 & 4 → OK
// Left sorted: [3, 4]

// Join:
// Left + Pivot + Right
// [3, 4] + [5] + [8]

// Final Result:
// ┌───┬───┬───┬───┐
// │ 3 │ 4 │ 5 │ 8 │
// └───┴───┴───┴───┘ ✅
