function basicShuffle(arr) {
    const result = [];
    const copy = [...arr];

    while (copy.length) {
        const i = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(i, 1)[0]);
    }

    return result;
}

console.log(basicShuffle([1, 2, 3, 4, 5]));
// Example output: [3, 1, 5, 4, 2]
