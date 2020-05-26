class car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class Suv extends car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 10;
  }
}

const Ford = new car(4, "focus", "grey");
const minisuv = new Suv(4, "focus", "grey");

console.log(Ford);
console.log(minisuv);
