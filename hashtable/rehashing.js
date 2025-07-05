class HashTable {
    constructor(size = 4) {
        this.size = size;
        this.count = 0;
        this.table = new Array(size);
    }

    _hash(key) {
        let sum = 0;
        for (let char of key) sum += char.charCodeAt(0);
        return sum % this.size;
    }

    insert(key, value) {
        if (this.count >= this.size) {
            this._rehash();
        }

        let idx = this._hash(key);
        while (this.table[idx] !== undefined) {
            idx = (idx + 1) % this.size;
        }
        this.table[idx] = { key, value };
        this.count++;
    }

    _rehash() {
        const oldTable = this.table;
        this.size *= 2;
        this.count = 0;
        this.table = new Array(this.size);

        for (let item of oldTable) {
            if (item) this.insert(item.key, item.value);
        }
    }

    print() {
        console.log(this.table);
    }
}

const ht = new HashTable();

ht.insert("a", 1);
ht.insert("b", 2);
ht.insert("c", 3);
ht.insert("d", 4);  // Will trigger rehash

ht.print();
