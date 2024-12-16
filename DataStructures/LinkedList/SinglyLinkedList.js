class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        }
        else {
            let temp = this.head;

            while (temp.next) {
                temp = temp.next;
            }

            temp.next = newNode;
        }

        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
        }
        else {
            let temp = this.head;

            while (temp.next.value != value) {
                temp = temp.next;
            }

            temp.next = temp.next.next;
        }

        this.size--;
        return;
    }

    print() {
        let temp = this.head;
        let result = '';

        while (temp) {
            result += ` ${temp.value} ->`;
            temp = temp.next;
        }

        console.log(result + ' null');
    }
}

export { LinkedList, Node };

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);

// list.print();

// list.delete(40);
// list.delete(20);

// list.print();

// list.prepend(5);
// list.prepend(2);

// list.print();

// merge 2 linkedlist
// sort linkedlist
// 