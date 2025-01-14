class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(val) {
        this.root = this.addRecursive(this.root, val);
    }

    addRecursive(node, val) {
        if (!node) {
            return new Node(val);
        }

        if (node.val > val) {
            node.left = this.addRecursive(node.left, val);
        }
        else {
            node.right = this.addRecursive(node.right, val);
        }

        return node;
    }

    preOrder(root) {
        if (!root) {
            return null;
        }

        console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    bfs() {
        if (!this.root) {
            console.log("Tree is Empty");
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currNode = queue.shift();
            console.log(currNode.val);

            if (currNode.left) {
                queue.push(currNode.left);
            }

            if (currNode.right) {
                queue.push(currNode.right);
            }
        }
    }
}

// const tree1 = new Tree();

// tree.add(5);
// tree.add(4);
// tree.add(3);
// tree.add(6);
// tree.add(7);
// tree.add(2);
// tree.add(1);
// tree.add(8);
// tree.add(9);

// tree.preOrder(tree.root);

let arr = [12, 23, 32, 46, 57, 43, 234, 64];
let tree2 = new Tree();

for (let val of arr) {
    tree2.add(val);
}

tree2.preOrder(tree2.root);
tree2.bfs();