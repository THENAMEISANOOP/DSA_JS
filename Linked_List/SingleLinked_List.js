class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

//   insert based value Add

  insert(value, index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

//  index based delete
  remove(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }

    this.size--;
  }

  // remove first
   removeFirst() {
        if (this.isEmpty()) return;
        this.head = this.head.next;
        this.size--;
    }
// remove last
    removeLast() {
        if (this.isEmpty()) return;
        if (this.size === 1) {
            this.head = null;
        } else {
            let prev = this.head;
            while (prev.next.next) {
                prev = prev.next;
            }
            prev.next = null;
        }
        this.size--;
    }

  display() {
    if (this.isEmpty()) {
      console.log("Empty List");
    } else {
      let curr = this.head;
      let listvalue = "";
      while (curr) {
        listvalue += curr.value + "->";
        curr = curr.next;
      }
      console.log(listvalue + "NULL");
    }
  }
}
const list = new LinkedList();
list.prepend(30);
list.prepend(20);
list.append(40);
list.append(50);
list.display();
list.insert(10,2);
list.display();
list.remove(2);
list.display()
