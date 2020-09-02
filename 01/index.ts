import {BinarySearch} from './BinarySearch.ts';
// import {GCD} from './GCD.ts';

const {args} = Deno;

// const p = parseInt(args[0]);
// const q = parseInt(args[1]);

// console.log('GCD.gcd(p, q)', GCD.gcd(p, q));

const whitelist = [2, 17, 7, 1, 0, 27, 5];

whitelist.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
});

const key = parseInt(args[0]);

console.log(BinarySearch.rankRecursive(key, whitelist));
