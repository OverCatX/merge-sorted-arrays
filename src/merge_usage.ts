import { merge } from './merge';

// collections
console.log('Example 1');
const c1 = [1, 4, 7];
const c2 = [2, 5, 8];
const c3 = [9, 6, 3];
console.log('collection1 (asc):', c1);
console.log('collection2 (asc):', c2);
console.log('collection3 (desc):', c3);
console.log('Result:', merge(c1, c2, c3));
console.log();

// Duplicate Collections
console.log('Example 2: duplicates collections');
const c4 = [1, 3, 5];
const c5 = [1, 3, 5];
const c6 = [5, 3, 1];
console.log('collection1 (asc):', c4);
console.log('collection2 (asc):', c5);
console.log('collection3 (desc):', c6);
console.log('Result:', merge(c4, c5, c6));
console.log();

// negative numbers collecttions
console.log('Example 3: negative numbers collecttions');
const c7 = [-5, -3, 0];
const c8 = [-4, -1, 2];
const c9 = [4, 1, -2];
console.log('collection1 (asc):', c7);
console.log('collection2 (asc):', c8);
console.log('collection3 (desc):', c9);
console.log('Result:', merge(c7, c8, c9));
