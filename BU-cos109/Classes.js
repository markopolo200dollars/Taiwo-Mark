// 1-classes.js
// Demonstrates ES6 classes, constructor, inheritance, getters, setters, static method, and private field.

class Person {
  // private field (stage-3+ feature; supported in modern Node)
  #mood = 'neutral';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log('Hi, I am ${this.name} and I am {this.age}');
  }

  get mood() {
    return this.#mood;
  }

  set mood(value) {
    this.#mood = value;
  }

  static species() {
    return 'Homo sapiens';
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log('${this.name} is studying ${this.major}');
  }
}

export { Person, Student };