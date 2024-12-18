class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertRecursive(this.root, value);
    }

    insertRecursive(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertRecursive(node.left, value);
        } else {
            node.right = this.insertRecursive(node.right, value);
        }

        return node;
    }

    preOrder(node = this.root) {
        if (node != null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node = this.root) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    postOrder(node = this.root) {
        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(10);
tree.insert(4);
tree.insert(5);

console.log("PreOrder");
tree.preOrder();

console.log("PostOrder");
tree.postOrder();

console.log("InOrder");
tree.inOrder();


