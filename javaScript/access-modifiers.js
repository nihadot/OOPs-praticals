// JavaScript
// Only public and private (#) are supported.

class Person {
  #age; // private

  constructor(name, age) {
    this.name = name; // public
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const p = new Person("Alice", 25);
console.log(p.name);   // ✅ public
console.log(p.getAge()); // ✅ access via method
// console.log(p.#age); // ❌ Error: private










// TypeScript

// Supports public, private, and protected.

// class Person {
//   public name: string;
//   private age: number;
//   protected city: string;

//   constructor(name: string, age: number, city: string) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   getAge() {
//     return this.age;
//   }
// }

// class Employee extends Person {
//   showCity() {
//     console.log(this.city); // ✅ protected accessible in subclass
//   }
// }

// const p = new Person("Alice", 25, "NY");
// console.log(p.name);   // ✅ public
// console.log(p.getAge()); // ✅ via method
// console.log(p.age);   // ❌ private
// console.log(p.city);  // ❌ protected
