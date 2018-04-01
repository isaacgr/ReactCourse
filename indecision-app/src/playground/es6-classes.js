// Point of cislasses is to reuse code
// Blueprint that we can use to build componenets

class Person {
  constructor(name='Anonymous', age=0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    // backticks indicate template string
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
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
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  homeLocation() {
    return !!this.location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation()){
      greeting += ` I'm visiting from ${this.location}.`
    }

    return greeting
  }
}

const me = new Traveler('Isaac Rowell', 26, 'Hamilton');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
