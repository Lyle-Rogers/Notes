// how make condicions
var age = 12;
var ageTwo = 12;

if (age == ageTwo) {
  console.log('they are equal');
}

// if you use three === instead of two == its telling the computer that the numbers dont have to just be equal but also they both have to be simulare as a string or a number
var age = 12;
var ageTwo = 12;

if (age === ageTwo) {
  console.log('they are equal');
}

// ! means not so if you put !== it would say if they are not then do this
if (age != ageTwo) {
    console.log('Not equal');
  }

// > means greater than and < means less than. If there age is greater than 25 than then itll "old enough to rent a car"
if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
  }
// > just putting that means itll only see if its lower than. <= putting this will make it check to see if it is lower than or equal to.

// Else tells the computer if the first condicions arent met to display the content in else
var age = 30;
if (age <= 10) {
  console.log("You can eat from the kids menu")
} else {
  console.log("Adult menu time for you?");
}


// putting && says that it requires this and that.
(age > 10 && age < 25)


// else if tells the computer that if the first condicions arent met to check these condicions
var age= 30;
if (age<= 10) {
  console.log("You can eat from the kids menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kids menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");   
} else if (age >= 25) {
  console.log("You can not eat from the kids menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car, Bitch");   
}


// Integrating Conditionals into JavaScript Strings with Ternary Operators. This is saying if true print what comes after the question mark. if not, print what comes after the collon.
const page = 'Fuck Life';
console.log(`class=${ page === 'Fuck Life' ? 'fuck this layout' : 'damn! another layout' }`)

console:
"class=fuck this layout"































