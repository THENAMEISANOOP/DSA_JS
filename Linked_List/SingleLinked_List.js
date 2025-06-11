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

  // duplicate remove
  duplicate() {
    let curr = this.head;
    while (curr) {
      let runner = curr;
      while (runner.next) {
        if (runner.next.value === curr.value) {
          runner.next = runner.next.next;
          this.size--;
        } else {
          runner = runner.next;
        }
      }
      curr = curr.next;
    }
  }
  // even remove
  evenremove() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.value % 2 === 0) {
        if (curr === this.head) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  }

  // reverse
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
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
list.prepend(21);
list.append(41);
list.append(50);
list.insert(99, 2);
list.remove(1);
list.removeFirst();
list.removeLast();
list.duplicate();
list.evenremove();
list.reverse();
list.display();



//-----------------------------PREPEND-------------------------------------------//

  // list.prepend(30)

// Before: NULL

// After:
// ┌────┐
// │ 30 │ → NULL
// └────┘


// // list.prepend(21)

// Before:
// ┌────┐
// │ 30 │ → NULL
// └────┘

// After:
// ┌────┐ → ┌────┐
// │ 21 │   │ 30 │ → NULL
// └────┘   └────┘

//-------------------------------APPEND----------------------------------------------------------------------//

// list.append(41)

// Before:
// ┌────┐ → ┌────┐
// │ 21 │   │ 30 │ → NULL
// └────┘   └────┘

// After:
// ┌────┐ → ┌────┐ → ┌────┐
// │ 21 │   │ 30 │   │ 41 │ → NULL
// └────┘   └────┘   └────┘

//------------------------------INSERT-INDEX-BASED----------------------------------------------------------//

// list.insert(99, 1);
/*
Inserts at index 1 (between 21 and 30):
Before: ┌────┐→┌────┐→┌────┐
        │ 21 │ │ 30 │ │ 41 │→ NULL
        └────┘ └────┘ └────┘

After : ┌────┐→┌────┐→┌────┐→┌────┐
        │ 21 │ │ 99 │ │ 30 │ │ 41 │→ NULL
        └────┘ └────┘ └────┘ └────┘
*/

// -------------------------REMOVE-INDEX-BASED--------------------------------------------------------//

// list.remove(2);
/*
Removes the value at index 2 (removes 30):
Before: ┌────┐→┌────┐→┌────┐→┌────┐
        │ 21 │ │ 99 │ │ 30 │ │ 41 │→ NULL
        └────┘ └────┘ └────┘ └────┘

After : ┌────┐→┌────┐→┌────┐
        │ 21 │ │ 99 │ │ 41 │→ NULL
        └────┘ └────┘ └────┘
*/

// --------------------------------REMOVE-FIRST-------------------------------------------------//

// list.removeFirst();
/*
Removes the head node:
Before: ┌────┐→┌────┐→┌────┐
        │ 21 │ │ 99 │ │ 41 │→ NULL
        └────┘ └────┘ └────┘

After : ┌────┐→┌────┐
        │ 99 │ │ 41 │→ NULL
        └────┘ └────┘
*/

// ----------------------------------REMOVE-LAST-----------------------------------------------//

// list.removeLast();
/*
Removes the last node:
Before: ┌────┐→┌────┐→┌────┐
        │ 20 │ │ 21 │ │ 30 │→ NULL
        └────┘ └────┘ └────┘

After : ┌────┐→┌────┐
        │ 20 │ │ 21 │→ NULL
        └────┘ └────┘
*/

// ----------------------------------DUPLICATE-REMOVE-----------------------------------------------//

// list = [10 → 20 → 20 → 30 → 10 → NULL];
// list.duplicate();
/*
Removes duplicate values (20, 10):
Before: ┌────┐→┌────┐→┌────┐→┌────┐→┌────┐
        │ 10 │ │ 20 │ │ 20 │ │ 30 │ │ 10 │→ NULL
        └────┘ └────┘ └────┘ └────┘ └────┘

After : ┌────┐→┌────┐→┌────┐
        │ 10 │ │ 20 │ │ 30 │→ NULL
        └────┘ └────┘ └────┘
*/

// ------------------------------------EVEN-REMOVE--------------------------------------------//

// list = [20 → 21 → 30 → 41 → 40 → 50 → NULL];
// list.evenremove();
/*
Removes all even numbers:
Before: ┌────┐→┌────┐→┌────┐→┌────┐→┌────┐→┌────┐
        │ 20 │ │ 21 │ │ 30 │ │ 41 │ │ 40 │ │ 50 │→ NULL
        └────┘ └────┘ └────┘ └────┘ └────┘ └────┘

After : ┌────┐→┌────┐
        │ 21 │ │ 41 │→ NULL
        └────┘ └────┘
*/


// --------------------------REVERSE---------------------------------------------//

// list = [10 → 20 → 30 → 40 → NULL];
// list.reverse();
/*
Reverses the list:
Before: ┌────┐→┌────┐→┌────┐→┌────┐
        │ 10 │ │ 20 │ │ 30 │ │ 40 │→ NULL
        └────┘ └────┘ └────┘ └────┘

After : ┌────┐→┌────┐→┌────┐→┌────┐
        │ 40 │ │ 30 │ │ 20 │ │ 10 │→ NULL
        └────┘ └────┘ └────┘ └────┘
*/
