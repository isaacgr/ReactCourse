function square (x){
  return x*x;
};

// recreate function wth es6 arrrow functions
// these functions are always Anonymous
// const squareArrow = (x) => {
//   return x * x;
// }

// arrow function expression syntax
// the expression is implicitly returned
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}
const getFirstNameEx = (fullName) => fullName.split(' ')[0];

const fullName = 'Isaac Rowell';

console.log(getFirstName(fullName));
