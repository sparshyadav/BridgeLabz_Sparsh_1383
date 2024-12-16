class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new CircularNode(value);

        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }

        this.size++;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let curr = this.head;
        let prev = null;

        if (curr.data === value) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.tail.next = this.head.next;
                this.head = this.head.next;
            }

            this.size--;
            return;
        }

        do {
            prev = curr;
            curr = curr.next;
            if (curr.data === value) {
                prev.next = curr.next;

                if (curr === this.tail) {
                    this.tail = prev;
                }

                this.size--;
                return;
            }
        } while (curr !== this.head);
    }

    print() {
        let temp = this.head;
        let result = '';

        do {
            result += `${temp.data} -> `;
            temp = temp.next;
        } while (temp !== this.head);

        console.log(result + ' null');
    }
}

const list = new CircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print();

list.delete(40);
list.delete(20);

list.print();