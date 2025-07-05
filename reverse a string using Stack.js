function reverseString(str) {
    const stack = [];
    for (let c of str) stack.push(c);
    let reversed = '';
    while (stack.length) reversed += stack.pop();
    return reversed;
}
console.log(reverseString("hello"));  // Output: "olleh"

