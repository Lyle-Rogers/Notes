// Basic Guide to Importing and Exporting Code in JavaScript with ES6 Syntax
export function multiply(numOne, numTwo) {  // made this variable an export by writing greeting before it. Now i can import it.
    return numOne * numTwo
}

import { multiply } from './helper'; // The import. This is how you import something you created.

console.log(multiply(2, 5));


// How to creat an export. Guide to Default Exports in JavaScript.
export function multiply(numOne, numTwo) {
    return numOne * numTwo;
  }
  
  export const greeting = 'Hi there';

// How to import your export.  
import * as helper from './helper'; 

console.log(helper.greeting);
console.log(helper.multiply(5, 6));


// This is a default export
export default function () {
  return '<div>Logo</div';
}


// How to import multiple exports at once.
import navigation, { greeting, multiply } from './navigation';

console.log(greeting);


// This dependency allows converts all your new modurn syntax so that other older browsers can read them.
"babel-core": "^6.26.3"


// Birthday function. Moment is clock that has been counting ever sence 1970. 
import moment from 'moment';

const rightNow = moment();

console.log(rightNow);

const birthday = moment('2002-10-14', 'YYY-MM-DD');
// birthday.format is finding the day i was born on. So on my console it printed monday.
console.log(birthday.format("dddd"));
// This tells you how long ago that day accured. so you can find exactly how many days you've been alive.
console.log(birthday.fromNow());


// This is a sight that shows you all the syntax for working with moment so that you can do awesome extraordanary shit with time simply.
https://devhints.io/moment


// A . before a file name means that the file is a hiden file



















