class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "auto", "grey");
      case "Honda":
        return new Car(3, "manual", "white");
    }
  }
}

const factory = new carFactory();
const Honda = factory.createCar("Honda");

console.log(Honda);
