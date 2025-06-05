// Node class to represent each element in the linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// LinkedList class to manage the list
class LinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.size = 0;     // Number of elements in the list
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the list
    getSize() {
        return this.size;
    }

    // Add an element at the beginning of the list
    prepend(value) {
        const node = new Node(value, this.head); // new node points to current head
        this.head = node;                        // update head to new node
        this.size++;                             // increase size
    }

    // Add an element at the end of the list
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node; // if list is empty, new node is head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // traverse to the last node
            }
            current.next = node; // add new node at the end
        }
        this.size++; // increase size
    }

    // Display the list values
    display() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let values = '';
        while (current) {
            values += current.value + ' -> ';
            current = current.next;
        }
        console.log(values + 'null');
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.display(); // Output: 5 -> 10 -> 20 -> null
