function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  const sortarr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortarr.push(left.shift());
    } else {
      sortarr.push(right.shift());
    }
  }
  return [...sortarr, ...left, ...right];
}
const arr = [5, 3, 8, 4];
console.log(mergesort(arr));




// Split:
// [5, 3, 8, 4]
//      ↓
// [5, 3]     [8, 4]
//  ↓          ↓
// [5] [3]     [8] [4]

// Merge:
// [5] + [3] → compare → 3 < 5
// ┌───┬───┐        ┌───┬───┐
// │ 3 │ 5 │        │ 4 │ 8 │
// └───┴───┘        └───┴───┘

// Final Merge:
// compare 3 & 4 → 3
// compare 5 & 4 → 4
// compare 5 & 8 → 5
// 8 remains
// ┌───┬───┬───┬───┐
// │ 3 │ 4 │ 5 │ 8 │
// └───┴───┴───┴───┘ ✅
