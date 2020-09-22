/*
import {Counter} from './Couter.ts';

const {args} = Deno;

const T = parseInt(args[0]);
const heads = new Counter('head');
const tails = new Counter('tail');

for (let t = 0; t < T; t++) {
    if (Math.random() > 0.5) {
        heads.increment();
    } else {
        tails.increment();
    }
}

console.log(`${heads}`);
console.log(`${tails}`);
console.log(Math.abs(heads.tally() - tails.tally()));
*/

import {SinglyLinkedList} from './SinglyLinkedList.ts';

const list = new SinglyLinkedList();

function* getRange(from: number, to: number) {
    while (from <= to) {
        yield from;
        from++;
    }
}

for (let i of getRange(0, 10)) {
    list.add(i);
}

console.log(`${list}`);             // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log(`${list.shuffle()}`);   // 7, 0, 4, 10, 5, 1, 9, 2, 6, 8, 3

for (let item of list.shuffle()) {
    console.log(item);
}
