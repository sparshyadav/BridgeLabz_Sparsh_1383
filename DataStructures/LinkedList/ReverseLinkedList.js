import { LinkedList } from "./SinglyLinkedList.js";

function reverse(list) {
    let curr = list.head;
    let prev = null;

    while (curr) {
        let nexxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nexxt;
    }

    list.head = prev;
}

let list = new LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

list.print();
reverse(list);
list.print();
