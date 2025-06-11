// factorail
function fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));

//----------------------------------------------------//

// fibonacci
function fibo(n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6));

// --------------------------------------------//

// reverse string
function reverse(str) {
  if (str === "") {
    return "";
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));

// ---------------------------------------------------//

// sum of elements

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3]));

// ----------------------------------------------------------//

// palindrome check
function palindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return palindrome(str.slice(1, -1));
}
console.log(palindrome("racecar"));
console.log(palindrome("hello"));

// -------------------------------------------------------------//
