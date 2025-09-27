// 2-arrow-functions.js
// Shows arrow functions, implicit return, and this-binding differences.

export const square = x => x * x; // concise arrow with implicit return

export const greetAll = names => {
  // arrow inside forEach — uses lexical this (but not needed here)
  names.forEach(n => console.log('Hello, ${n}!'));
};

// example of using arrow with map
export const doubleAll = arr => arr.map(n => n * 2);