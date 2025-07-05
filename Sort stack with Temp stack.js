function sortStack(stack) {
    const temp = [];
    while (stack.length) {
        let x = stack.pop();
        while (temp.length && temp[temp.length - 1] < x) stack.push(temp.pop());
        temp.push(x);
    }
    while (temp.length) stack.push(temp.pop());
}
const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack);  // [3, 23, 31, 34, 92, 98]
