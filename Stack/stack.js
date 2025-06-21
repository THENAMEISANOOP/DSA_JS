class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the top
    push(value) {
        this.items.push(value);
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.items.pop();
    }

    // View top element
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size of stack
    size() {
        return this.items.length;
    }

    // Print stack
    print() {
        console.log(this.items.join(" -> "));
    }
}

// ✅ Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();      // Output: 10 -> 20 -> 30
console.log(stack.pop());    // Output: 30
console.log(stack.peek());   // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size());   // Output: 2
