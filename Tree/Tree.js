class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // ✅ Insert (same structure as delete)
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(root, value) {
        if (!root) return new Node(value);
        if (value < root.value) {
            root.left = this._insert(root.left, value);
        } else if (value > root.value) {
            root.right = this._insert(root.right, value);
        }
        return root;
    }

    // ✅ Delete (same structure as insert)
    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(root, value) {  
        if (!root) return null;

        if (value < root.value) {
            root.left = this._delete(root.left, value);
        } else if (value > root.value) {
            root.right = this._delete(root.right, value);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            const min = this._findMin(root.right);
            root.value = min;
            root.right = this._delete(root.right, min);
        }
        return root;
    }

    _findMin(root) {
        while (root.left) root = root.left;
        return root.value;
    }

    // 🔍 Search
    search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        return value < root.value
            ? this.search(root.left, value)
            : this.search(root.right, value);
    }

    // 🔽 Min
    findMin(root) {
        if (!root) return null;
        while (root.left) root = root.left;
        return root.value;
    }

    // 🔼 Max
    findMax(root) {
        if (!root) return null;
        while (root.right) root = root.right;
        return root.value;
    }
    
     // 🔍 Search (wrapper + helper)
    search(value) {
        return this._search(this.root, value);
    }

    _search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        return value < root.value
            ? this._search(root.left, value)
            : this._search(root.right, value);
    }


    // 📏 Height
    height(root) {
        if (!root) return 0;
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }

    // 🔁 Inorder (LNR)
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    // 🔁 Preorder (NLR)
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    // 🔁 Postorder (LRN)
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new BST();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Inorder Traversal:");
bst.inorder(bst.root); // 20 30 40 50 60 70 80

console.log("Preorder Traversal:");
bst.preorder(bst.root); // 50 30 20 40 70 60 80

console.log("Postorder Traversal:");
bst.postorder(bst.root); // 20 40 30 60 80 70 50

console.log("Min:", bst.findMin(bst.root)); // 20
console.log("Max:", bst.findMax(bst.root)); // 80
console.log("Height:", bst.height(bst.root)); // 3
console.log("Search 40:", bst.search(bst.root, 40)); // true

bst.delete(70);
console.log("Inorder after deleting 70:");
bst.inorder(bst.root); // 20 30 40 50 60 80
