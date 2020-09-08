import {SinglyLinkedList} from './SinglyLinkedList';

const list = new SinglyLinkedList();

console.log(`${list}`);

list.insertValueAtBeginning('e');
list.insertValueAtEnd('t');
list.insertValueAtBeginning('w');
list.insertValueAtBeginning('q');
list.insertValueAtEnd('y');
list.insertAfterReferenceValue('r', 'e');

console.log(`${list}`); // q, w, e, r, t, y
