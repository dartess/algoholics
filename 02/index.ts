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
