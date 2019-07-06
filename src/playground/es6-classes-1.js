class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `hi i am ${this.name} ! `;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description + ` There major is ${this.major}.`;
    }
    return description;
  }
}
class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let getGreeting = super.getGreeting();
    if (!!this.homeLocation) {
      getGreeting += ` I am visiting from ${this.homeLocation}`;
    }
    return getGreeting;
  }
}
const me = new Traveller("Tanisha Negi", 10, "Rawatbhata");
console.log(me.getGreeting());
const other = new Traveller();
console.log(other.getGreeting());
