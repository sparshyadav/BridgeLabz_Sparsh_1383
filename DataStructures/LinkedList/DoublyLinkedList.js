class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    print() {
        let temp = this.head;
        let result = '';

        while (temp) {
            result += `${temp.value} -> `;
            temp = temp.next;
        }

        console.log(result + ' null');
    }

    delete(value) {
        if (!this.head) {
            return null;
        }
        else {
            let temp = this.head;

            while (temp.next.value != value) {
                temp = temp.next;
            }

            temp.next = temp.next.next;
            temp.next.prev = temp;
        }
    }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print();

list.delete(40);
list.delete(20);

list.print();