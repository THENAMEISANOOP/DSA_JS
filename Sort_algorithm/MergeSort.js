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
const arr = [1, 3, 6, 4, 5, 2];
console.log(mergesort(arr));
