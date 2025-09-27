// main.js — entry point that imports other modules and runs small demos

import { Person, Student } from './1-classes.js';
import { square, greetAll } from './2-arrow-functions.js';
import { demoVariables } from './3-variables.js';
import { demoArrayMethods } from './4-array-methods.js';
import { demoDestructuring } from './5-destructuring.js';
import { moduleInfo } from './6-modules.js';
import { demoTernary } from './7-ternary-operators.js';
import { demoSpread } from './8-spread-operators.js';

console.log('--- CLASSES ---');
const p = new Person('Ireyimika', 29);
p.sayHi();
const s = new Student('Tobi', 22, 'Computer Science');
s.sayHi();
s.study();

console.log('\n--- ARROW FUNCTIONS ---');
console.log('square(5) =', square(5));
greetAll(['Ireyimika','Tobi','Mark']);

console.log('\n--- VARIABLES ---');
demoVariables();

console.log('\n--- ARRAY METHODS ---');
demoArrayMethods();

console.log('\n--- DESTRUCTURING ---');
demoDestructuring();

console.log('\n--- MODULE (info) ---');
console.log(moduleInfo());

console.log('\n--- TERNARY OPERATORS ---');
demoTernary(75);
demoTernary(45);

console.log('\n--- SPREAD OPERATORS ---');
demoSpread();