class Person {
  constructor(name) {
    this.name = name;
  }

  normalFunction() {
    console.log("Normal:", this.name);
  }

  arrowFunction = () => {
    console.log("Arrow:", this.name);
  };
}

const p = new Person("Alice");
p.normalFunction(); // Normal: Alice
p.arrowFunction();  // Arrow: Alice

const ref1 = p.normalFunction;
const ref2 = p.arrowFunction;

ref1(); // Normal: undefined (lost `this`)
ref2(); // Arrow: Alice (kept outer `this`)







// Normal Function
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   normalFunction() {
//     console.log(this.name);
//   }
// }

// const p = new Person("Alice");
// p.normalFunction(); // Alice  ✅ works, this = p

// const ref1 = p.normalFunction;
// ref1(); // undefined ❌ this lost because function is detached






// Arrow Function
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.arrowFunction = () => {
//       console.log(this.name);
//     }
//   }
// }

// const p = new Person("Alice");
// p.arrowFunction(); // Alice ✅ works, this = p

// const ref2 = p.arrowFunction;
// ref2(); // Alice ✅ this still points to p (lexical binding)
