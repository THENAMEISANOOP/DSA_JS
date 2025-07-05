class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size = 4) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    _hash(key) {
        let sum = 0;
        for (let char of key) sum += char.charCodeAt(0);
        return sum % this.size;
    }

    insert(key, value) {
        const idx = this._hash(key);
        let head = this.table[idx];

        // Check if key exists → update value
        let curr = head;
        while (curr) {
            if (curr.key === key) {
                curr.value = value;
                return;
            }
            curr = curr.next;
        }

        // Insert new node at head
        const newNode = new Node(key, value, head);
        this.table[idx] = newNode;
    }

    get(key) {
        const idx = this._hash(key);
        let curr = this.table[idx];

        while (curr) {
            if (curr.key === key) return curr.value;
            curr = curr.next;
        }

        return undefined;
    }

    print() {
        this.table.forEach((item, idx) => {
            let str = `Index ${idx}: `;
            let curr = item;
            while (curr) {
                str += `(${curr.key}:${curr.value}) -> `;
                curr = curr.next;
            }
            console.log(str + "null");
        });
    }
}

const ht = new HashTable();

ht.insert("a", 1);
ht.insert("b", 2);
ht.insert("c", 3);
ht.insert("d", 4);
ht.insert("e", 5);

ht.print();

console.log("Get c:", ht.get("c"));  // 3
console.log("Get z:", ht.get("z"));  // undefined
