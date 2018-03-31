var nameVar = 'Isaac';
var nameVar = 'Steve';
console.log(nameVar);

//Not able to redefine a let or const variable
//can reassign a let, but not a const
//will get error, babel crashes
let nameLet = 'Q';
nameLet = 'J';
console.log(nameLet);

const nameConst = 'K';
console.log(nameConst);

function getName(){
  var name = 'Hal';
  return name;
}

const name = getName();
console.log(name); //the scope of var is local to the function it was created in

// let and const are block level scoped
// scoped to blocks of code like for or if statemenets

const fullName = 'Isaac Rowell';
let firstName;

if (fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
