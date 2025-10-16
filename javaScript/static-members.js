class Counter {
  static count = 0; // static property

  constructor() {
    Counter.count++; // access static property
  }

  static getCount() {
    return Counter.count; // static method
  }
}

const a = new Counter();
const b = new Counter();

console.log(Counter.getCount()); // 2
console.log(a.count); // undefined, static not accessed via object
