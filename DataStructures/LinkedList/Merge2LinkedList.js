import { LinkedList, Node } from "./SinglyLinkedList.js";

function mergeLinkedList(list1, list2) {
    let dummy = new Node(0);
    let temp = dummy;

    let l1 = list1.head;
    let l2 = list2.head;

    while (l1 && l2) {
        if (l1.data < l2.data) {
            temp.next = l1;
            l1 = l1.next;
        }
        else {
            temp.next = l2;
            l2 = l2.next;
        }

        temp = temp.next;
    }

    if(l1){
        temp.next=l1;
    }
    
    if(l2){
        temp.next=l2;
    }

    return dummy.next;
}

function printList(head) {
    let result = "";
    let temp = head;

    while (temp) {
        result += temp.data + " -> ";
        temp = temp.next;
    }

    console.log(result + "null");
}

let list1=new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);

let list2=new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);

let newHead=mergeLinkedList(list1, list2);
printList(newHead);