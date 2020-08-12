// Spread Operator
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.mac(orderTotals)); // This one wont work because it is treeting orderTotals as one object instead of an entire array 

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); // the three dots is the spread operator. it spreads orderTotals out as if it was an array and not an abject. so now Math.max can find the highst number  in the array where as in the other function on top it didnt know that orderTotals was an array but just one item.


// The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);


// how to use the reduce function in a function and what fill does
const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num); // fill s saying ther is exp amount of empty containers and you want it to fill each container with num items. Array(exp) is turning the exp argument into a array. Making all the objects in exp their own object and not one bundled object called exp.
  const reducer = (total, currentValue) => total * currentValue;
  return items.reduce(reducer);
}

console.log(toThePowerOf(2, 3))


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


// <!-- This makes it so that you can add html content to your websight derectly from the websights text box. How to Dynamically Create HTML Elements with JavaScript -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title></title>
// </head>
// <body>
//     <div class="widget">
//         <input type="text" id="chat-input">
//         <button id="msgBtn" onclick="sendMessage()">Submit</button>
//     </div>

//     <div class="chat-wrapper"></div>

// </body>

// <script>
//     function sendMessage() { // This is creating a new div every time you click submit in the text box and adding the text you put in the text box to that div and then placing it at the bottom of the text box. This code is also saying that if this insert the code befor newDive inside of chatWrapper. Nice huh?
//         const newDiv = document.createElement('div');
//         newDiv.classList.add('chatMsg');
//         let chatInput = document.querySelector('#chat-input').value;
//         const newContent = document.createTextNode(chatInput);
//         newDiv.appendChild(newContent);

//         const widget = document.querySelector('.widget');
//         let chatWrapper = document.querySelector('#chat-wrapper');
//         document.querySelector('#chat-input').value = '';

//         if (document.querySelectorAll('.chatMsg').length > 0) {
//             chatWrapper = document.querySelectorAll('.chatMsg')[0];
//         }

//         widget.insertBefore(newDiv, chatWrapper);
//     }
// </script>
// </html>


// Adding a paragraph tag inside the parent that has the text content: Hello
<div id='parent'></div>

var paragraph = document.createElement('p'); // This literally creats this <p></p> paraghraph tag.
var text = document.createTextNode('Hello'); // This converts a string into html text that can then be placed inside the paragraph tag.
paragraph.appendChild(text);
document.getElementById('parent').appendChild(paragraph);


// How to use console.table. This prints out a list of objects in the turminal as a table list. 
  const playerNames = [
    { name: 'Altuve', pos: '2b' },
    { name: 'Corea', pos: 'ss' },
    { name: 'Bregman', pos: '3b' },
  ]


// You can console.log multiple things at once.
const someObj = {
  name: 'Kristine'
}

console.log('Hi', someObj, 'After object');


// This is how to create an error console.log.
console.error('oops');


// How to console.log a warning.
console.warn('Something is about to go wrong');















































