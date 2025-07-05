// Helper function to insert element at bottom of stack
function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
        return;
    }

    const top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top);
}

// Main function to reverse stack
function reverseStack(stack) {
    if (stack.length === 0) {
        return;
    }

    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
}


const stack = [1, 2, 3, 4, 5];  // Stack top is at the end (5 is top)

console.log("Original stack:", [...stack]);
reverseStack(stack);
console.log("Reversed stack:", stack);
