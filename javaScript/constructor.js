// 1. Default Constructor
class DefaultExample {
  constructor() {
    this.name = "Default Name";
  }
}

const obj1 = new DefaultExample();
console.log(obj1.name); // Output: Default Name




// 2. Parameterized Constructor
class ParameterizedExample {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const obj2 = new ParameterizedExample("Alice", 25);
console.log(obj2.name, obj2.age); // Output: Alice 25







// 3. Copy Constructor (manual in JS)
class CopyExample {
  constructor(other) {
    if (other instanceof CopyExample) {
      this.name = other.name;
      this.age = other.age;
    } else {
      this.name = "Default";
      this.age = 0;
    }
  }
}

const original = new CopyExample();
original.name = "Bob";
original.age = 30;

const copy = new CopyExample(original);
console.log(copy.name, copy.age); // Output: Bob 30
