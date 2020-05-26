class car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const Ford = new car(4, "focus", "grey");
console.log(Ford);
