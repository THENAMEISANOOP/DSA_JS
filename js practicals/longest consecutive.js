function longestRepeatingChar(str) {
    let maxChar = '', maxCount = 0, count = 0, prev = '';

    for (let c of str) {
        if (c === prev) count++;
        else count = 1;

        if (count > maxCount) {
            maxChar = c;
            maxCount = count;
        }

        prev = c;
    }

    return { char: maxChar, count: maxCount };
}
console.log(longestRepeatingChar("aaabbccccddddddee"));  
// { char: 'd', count: 6 }
