var age = 12;
var ageTwo = 12;

if (age == ageTwo) { // == this means is eqaul too. It doesn't matter if they are equal as a number or string .etc It just matters the the data is equal, not the object. 
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


// <!-- How to Build a Character Countdown Function. Query selectors. Conditianals. -->
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


// Try exacutes the block of code inside it. Then catch, which is a part of try, catchess any errors in try.
try {
  // Some block of code that has some shit to do with an email being pulled from the database.
} catch (error) {
  session.flash({
      notification: {
          type: 'danger',
          message: `Sorry, there is no user with the email address of ${ request.input('email') }`
      }
  })

  return response.redirect('back')
}


// Create an Array Popper that Alternates Returning from Each Side of an Array in JavaScript using a class.
class ArrayPopper {
    constructor(arr) {
        this.arr = arr;
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper()


// This is an if statement. ? means print this and : means if else.
'asdg' === 'asdf' ? 'yay' : 'nay'
console: "nay"

'asdg' !== 'asdf' ? 'yay' : 'nay'
console: "yay" 





















