import {SinglyLinkedList} from './SinglyLinkedList';

const list = new SinglyLinkedList();

console.log(`${list}`);

list.addFirst('e');
list.add('t');
list.addFirst('w');
list.addFirst('q');
list.add('y');
list.addAfter('r', 'e');

console.log(`${list}`); // q, w, e, r, t, y
console.log(`${list.shuffle()}`); // t, y, w, e, q, r или что-то ещё
