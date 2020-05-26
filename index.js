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
class Suv {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class suvFactory {
  createSuv(type) {
    switch (type) {
      case "Volswagon":
        return new Car(4, "auto", "grey");
      case "Ferrari":
        return new Car(8, "Auto", "Metallic Grey");
    }
  }
}

const carfactory = new carFactory();
const suvfactory = new suvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carfactory.createCar(model);
    case "suv":
      return suvfactory.createSuv(model);
  }
};

const carry = autoManufacturer("suv", "Ferrari");

console.log(carry);
