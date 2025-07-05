class TrieNode {
    constructor() {
        this.children = {};   // Map of char -> TrieNode
        this.isEnd = false;   // Marks end of word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("bat");

console.log(trie.search("app"));     // true
console.log(trie.search("apple"));   // true
console.log(trie.search("appl"));    // false
console.log(trie.startsWith("ap"));  // true
console.log(trie.startsWith("ba"));  // true
console.log(trie.startsWith("cat")); // false
