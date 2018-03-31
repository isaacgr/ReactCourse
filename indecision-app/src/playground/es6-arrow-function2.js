// arguments object is no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55,1));

// this keyword is not longer bound with arrow functions

const user = {
  name: 'Isaac',
  cities: [
    'Hamilton',
    'Lakehead'
  ],
  printPlacesLived() {
    // forEach allows you to do something with each item
    // map allows you to transform each item and get a new array back with
    // the transformed items
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  nums: [
    1,
    2,
    3
  ],
  multiplyBy: 3,
  multiply() {
    return this.nums.map((number) => this.multiplyBy*number);
  }
}

console.log(multiplier.multiply());
