// seeing this () aftert a calling name tells the computer its calling a function and not a variable or something else.


// How to build a switch function. Switch works like a light switch. typeof checks for what type of data it is. Case says that in this type of case put this. Break acts like a div in html. This situation is sort of like using red stone in Minecraft, lol.
var dataPoint = 5;

switch (typeof dataPoint) {
  case "string":
    console.log('It is a string!');
    break;
  case "number":
    console.log('It is a number!');
    break;
  case "boolean":
    console.log('It is either true or false!');
    break;
  default:
    console.log('No matches');
}

//this is a simpler way to create a switch type of function
function ageVerification(age) {
  if (age > 25) {
    console.log('Can rent a car');
  } else {
    console.log('is not old enough yet');
  } 
  let answer = age > 25 ? 'can rent a car' : "can't rent a car";
  console.log(answer);
}
ageVerification(55);//This is calling the function and setting it's value to 55.


// This is simple example of a function
function dashboardGreeting() {
  console.log("Hi There, ".concat(userObj.fullName));
}
// This is calling the function wich is another way of saying activating it. All this function is going to do though is console.log(what was put in here.) In some situations you can add a value in the paranthesies but in this case the function wouldnt know what to do with it.
dashboardGreeting() 


// how to use functions
var userObj = {
  email: 'sample@devcamp.com',
  fullName: 'Kristine Hudgens'
}
   
function dashboardGreeting() {
  console.log("Hi There, ".concat(userObj.fullName)); // Inside of the parense it's grabbing the item fullName out of the variable userObj.
}
dashboardGreeting();
"Hi There, Kristine Hudgens"

// dashboardGreeting is a function that greets the user as soon as they log in
var userObj = {
  email: 'sample@devcamp.com',
  fullName: 'Kristine Hudgens'
}
   
function dashboardGreeting() {
 var userObj = {
  email: 'sample@devcamp.com',
  fullName: 'Tiffany Hudgens'
}


//an expression basicaly expresses a function while a decluration declares the function
//decluration
function greeting() {
    return "Hi there!";
  }
  //expression
  var greetingTwo = function () {
    return 'hi there again';
  };


// Introduction to Arrow Functions in JavaScrip
// Same function written as function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow functions with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');

userInfo = (city, state, zip) => { return(`${city}, ${state} ${zip}`); }
userInfo('Lehi', 'UT', '84043')


// Build an HTML Heading Generator Function in JavaScript
function headingGenerator (title, heading) {
  console.log(`<h${heading}>${title}</h${heading}>`);
}
headingGenerator('The Gathering', '1');


// Arrow functions allow us to write shorter function syntax:
// Before:
hello = function() {
  return "Hello World!";
}

// With Arrow Function:
hello = () => {
  return "Hello World!";
}

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword: It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World!";


// How Arrow Functions Work with ‘this’
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    console.log(this);
  }, 2000);// This makes it print every two seconds
}

const inv = new Invoice(200);
inv.total();

// Another one
function SavingCalc(paycheck) {
  this.percent = 0.30;
  this.paycheck = paycheck;

  this.deposit = function() {
    return (this.percent * this.paycheck)
  }
}

const piggyBank = new SavingCalc(2000);


// Slice 
const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart.slice(); // Slice updates updatedCart without changeing the value of shoppingCar.
updatedCart.push(5);
console.log(shoppingCart)


// Guide to JavaScript Bind Function
const userOne = {
  firstName: "Kristine",
  lastName: "Hudgens"
}

const userTwo = {
  firstName: "Tiffany",
  lastName: "Hudgens"
}

const fullName = function() {
  return '${this.lastName}, ${this.firstName}';
}

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo); //This binds the them together.

kristine()
tiffany()


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


<!-- How to Build a Character Countdown Function. Query selectors. Conditianals. -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title></title>
// </head>
// <body>
//   <input type="text" class="msgInput">

//   <div>
//       Characters left <span class="msgCounter">20</span>
//   </div>
// </body>
// <script>
//     const msgInput = document.querySelector('.msgInput');
//     const msgCounter = document.querySelector('.msgCounter');
//     const max = 20;
//     const ensureContentLength = (content, max) => {
//         if (content.length > max) {
//             return false;
//         } else {
//             return true;
//         }
//     }

//     msgInput.onkeyup = function() {
//         msgCounter.innerHTML = max -this.value.length;

//         if (!ensureContentLength(this.value, (max - 1))) {
//             msgInput.disabled = true;
//         }
//     }
// </script>
// </html>


{/* <!-- How to make our text count function be abled to be called whenever we want with whatever text input we want and set our own max count to whatever we want. Guide to Building Shared Behavior with JavaScript Functions -->
// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>
// <body>
//   <input type="text" class="msgInput">

//   <div>
//     Characters left <span class="msgCounter"></span>
//   </div>

//   <hr>

//   <input type="text" class="tags">

//   <div>
//     Characters left <span class="tagsCounter"></span>
//   </div>
// </body>

// <script>
//   const getCurrentContentLength = (content, max) => {
//     const maxLength = max;
//     if (content.length > maxLength) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   const msgInput = document.querySelector('.msgInput');
//   const msgCounter = document.querySelector('.msgCounter');
//   const tagsInput = document.querySelector('.tags');
//   const tagsCounter = document.querySelector('.tagsCounter');

//   // Nope
//   // msgInput.addEventListener('keyup', (e) => {
//   //   console.log(e);
//   // });

//   const textFieldLengthValidator = (textField, counter, maxCount) => {
//     textField.onkeyup = function() {
//        counter.innerHTML = maxCount - this.value.length;

//         if(!getCurrentContentLength(this.value, (maxCount - 1))) {
//             textField.disabled = true;
//         }
//     }
//   }

//   textFieldLengthValidator(msgInput, msgCounter, 144);
//   textFieldLengthValidator(tagsInput, tagsCounter, 42);
// </script>
// </html>


<!-- Guide to Removing HTML Elements with JavaScript -->
<body>
  <div class="widget">
    <input type="text" id="chat-input">
    <button id="msgBtn" onclick="sendMessage()">Submit</button>
    <button onclick="clearMessages()">Clear Messages</button>
    <div class="chat-wrapper"></div>
  </div>
</body>  */}

{/* <script>
  function sendMessage() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('chatMsg');
    let chatInput = document.querySelector('#chat-input').value;
    const newContent = document.createTextNode(chatInput);
    newDiv.appendChild(newContent);
    const widget = document.querySelector(".widget");
    let chatWrapper = document.querySelector("chat-wrapper");
    document.querySelector('#chat-input').value = '';
    if (document.querySelectorAll('.chatMsg').length > 0) {
      chatWrapper = document.querySelectorAll('.chatMsg')[0];
    }
    widget.insertBefore(newDiv, chatWrapper);
  }
  // This function makes a  button and every time you click the button it removes all the html that was added
  function clearMessages() {
    const messages = document.querySelectorAll('.chatMsg');
    messages.forEach(el => el.remove());
  }
</script>

</html> */}


// How to create a capitalize function. 
const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

const shortStr = "Hi there";
const longStr = "The dead brown fox jumped over the gay fucked dog!"

console.log(toCapital(longStr));
console.log(toCapital(shortStr));


























