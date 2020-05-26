let instance = null;
class car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
    } else {
      return instance;
    }
  }
}

// class Suv extends car {
//   constructor(doors, engine, color) {
//     super(doors, engine, color);
//     this.wheels = 10;
//   }
// }

const Ford = new car(4, "focus", "grey");
const Henry = new car(1, "simple", "noduplicate Instance");
// const minisuv = new Suv(4, "focus", "grey");

console.log(Ford);
console.log(Henry);
