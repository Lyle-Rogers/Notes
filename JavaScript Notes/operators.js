// Spread Operator
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.mac(orderTotals)); // This one wont work because it is treeting orderTotals as one object instead of an entire array 

const orderTotals = [1, 5, 1, 10,2, 3];
console.log(Math.max(...orderTotals)); // the three dots is the spread operator. it spreads orderTotals out as if it was an array and not an abject. so now Math.max can find the highst number  in the array where as in the other function on top it didnt know that orderTotals was an array it thought it was a function.


// The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);


// how to use the reduce function in a function and what fill does
const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num); // fill s saying ther is exp amount of empty containers and you want it to fill each container with num items.
  const reducer = (total, currentValue) => total * currentValue;
  return items.reduce(reducer);
}

console.log(toThePowerOf(2, 3))


// This is how you select an object with query selectors
<div class="parent">
    <div class="decoy"></div>
    <div class="decoy"></div>
    <div class="target">You got this!</div>
    <div class="decoy"></div>
</div>

var query = document.querySelector('.target')


// Build a Weighted Lottery Function in JavaScript. 
const weightedLottery = weights => {
    let containerArray = [];
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
    return containerArray[(Math.random() * containerArray.length) | 0];// | means if not basically.
  };
  const weights = {
    green: 1,
    yellow: 2,
    red: 3
  };
  console.log(weightedLottery(weights)); // This returns a random key from they array weights.


//Random operator. Build a Weighted Lottery Function in JavaScript. 
const weightedLottery = weights => {
    let containerArray = [];
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
    return containerArray[(Math.random() * containerArray.length) | 0];// | means if not basically.
  };
  const weights = {
    green: 1,
    yellow: 2,
    red: 3
  };
  console.log(weightedLottery(weights)); // This returns a random key from they array weights.


// Pretty price method, Math.floor, Number.isInteger.
const prettyPrice = (grossPrice, extension) => {
  if (Number.isInteger(extension)) { // An integer is a none whole number. isInteger is an operator.
    extension = extension * 0.01;// This times is the number by 0.01
  }
  return Math.floor(grossPrice) + extension; //Math.floor rounds it down to the nearest whole number.
}

console.log(prettyPrice(30.7, 40.4))//? 70.4


// Basic Error Management Syntax in JavaScript. How to print what you want your errors to say if any accur with this function
function siteComponent(func) {
  return func();
}

widget = () => {
  return '<div>Hi there</div>';
}

try {
  console.log(siteComponent('j'));// J is supposed to be widget. This is making the console through an error.
} catch(e) {  // This basicaly means catch the error
  console.log('An error accured. Sorry but you need to fuck off!', e); // If an error accures this is what is printed out.
}











