// 3-variables.js
// Demonstrates var, let, const and block scoping.

export function demoVariables() {
  // var is function-scoped
  var a = 1;
  if (true) {
    var a = 2; // same variable, overwritten
    console.log('inside block var a =', a); // 2
  }
  console.log('outside block var a =', a); // 2

  // let is block-scoped
  let b = 10;
  if (true) {
    let b = 20; // different variable
    console.log('inside block let b =', b); // 20
  }
  console.log('outside block let b =', b); // 10

  // const cannot be reassigned
  const c = { name: 'const object' };
  console.log('const c before mutation:', c);
  c.name = 'mutated'; // allowed: mutating object properties
  console.log('const c after mutation:', c);

  // but reassigning the binding would throw:
  // c = {}; // TypeError
}