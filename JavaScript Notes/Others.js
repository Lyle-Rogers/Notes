// This is how to copy something in multaple rows and past it without it coping it all onto one line.
copy(Array) // write copy() and inside the parenthesies write the name of what your copying, like the class name. then click enter.
// Now you've copied it to your clip board and all you have to do now is past it and itll all be lined up in rows like it was in the original form and not all on one line.


// This battle ship game is fun
var ship = "hit";

function battleShip() {
  return(ship === 'hit' ? '1 point' : 'You lost a point')
}


// To check what type of data something is 
typeof 12;
console:
"number"

typeof true;
console:
"boolean"


// Remember that every element in the browser, such as links, headings, images, and more are all included in what is called the DOM or the document object model. Because of that, it means that JavaScript is able to work with every element on the page just like any other object.


// || means or
function fullName(firstName, lastName, language) {
    var language = language || 'English';//this is saying that if a language is not given, then English is the default.
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
  }
  console.log(fullName('Jordan', 'Hudgens', 'Spanish'));


  // How to make a closer. getCurrentAverage gets the current average. 
  // updateHitsAndAtBats updates the variables.
  function battingAverage () {
    var hits = 100;
    var atBats = 300;
    return {
      getCurrentAverage: function () {
        return (hits/atBats)
      },
      updateHitsAndAtBats: function (hit, atBat) {
        hits += hit;
        atBats += atBat;
      }
    }
  }
  var altuve = battingAverage();
  console.log(altuve.getCurrentAverage());
  altuve.updateHitsAndAtBats(0, 20);
  console.log(altuve.getCurrentAverage());
  

// How to Check if Two Objects Have Equal Values
const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

const obj2 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

obj1 == obj2;
isEqual(obj1, obj2);


 // Debugger stops the program from running the program any further. So only all  the content that was abouve the debugger will be activated while all the rest of the code under it wont be active until you click run in the inspect tools.
 const links = [
  "https://google.com",
  "https://devcamp.com",
  "https://airbnb.com"
];

const webLinks = _.reduce(links, function(content, link) {
  debugger; // To use debugger just write it any where in your code just like this.
  return `<a href='${link}'>${link}</a><br>`.concat(content);
}, '');


console.log(webLinks)


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


// How to Create a Custom Error Class in JavaScript. But this fucker isn't working.
class DevcampError extends Error { /// This is just a normal class with blueprints that run costume errors.
  constructor(msg = 'An error occurred', ...params) { // This is what is printed first.
    super(...params);

    this.msg = msg;
  }
}


function siteComponent(func) {
  return func();
}

try {
  console.log(siteComponent('oops')); // This ooops here is whats causing the error to accure.
} catch(e) {
  throw new DevcampError('DevcampError', e); // This will be printed as the error type.
}

widget = () => {
  return '<div>Hi there</div>';
}


// In an html file put <script></script> at the bottom and then add watever JavaScript you want inside and you can even run it with live server.


// Integrating Error Management into API Calls in JavaScript
class ApiError extends Error {
  constructor(msg = `An api error occurred`, ...params) {
    super(...params);

    this. msg = msg;
  }
}

var request = new XMLHttpRequest();// This is a specific function.

request.open(`GET`, `http://api.dailysmarty.com/oops`, true); // This gets the dailysmarty api.

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    throw new ApiError(`ApiError`, `An Api error accurred with a status code of ${request.status}`)
  }
}

request.send(); // I think this sends information back and forth but idk.


// <!-- How to make camand short cuts with hot keays. With this you can make a hot key, like ctrl b, be able to do whatever you want. like you go to face book, put your small amount of code in the inspect console, then click ctrl b and fallow every one at once. You can make these control keys do whatever you want. In this specific code it creates a search bar and if you ctrl b it'll youll be able to type in the search bar without having to click on the search bar. -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title></title>
// </head>
// <body>
    
//     <input type="text" id="searchBar">

// </body>

// <script>
//     const hotKeys = (e) => {
//         let windowEvent = window.event ? event : e;

//         if (windowEvent.keyCode === 66 && windowEvent.ctrlKey) {
//             const searchBar = document.querySelector('#searchBar');
//             searchBar.focus();
//         }
//     }

//     document.onkeydown = hotKeys;
// </script>
// </html>


// Random operator. Build a Weighted Lottery Function in JavaScript. 
const weightedLottery = weights => {
  let containerArray = [];
  Object.keys(weights).forEach(key => {
    for (let i = 0; i < weights[key]; i++) { // this saying to keep on going until every object has ran through and the amount left is 0.
      containerArray.push(key);
    }
  });

  return containerArray[(Math.random() * containerArray.length) | 0];// | means if not basically.
};
const weights = {
  green: 1,
  yellow: 2,
  red: 3 // The higher the whight number is here, the more chances this object gets of being picked than the other object.
};
console.log(weightedLottery(weights)); // This returns a random key from they array weights. The key is the number after the objects in wheight.


// You can console.log multiple things at once.
const someObj = {
  name: 'Kristine'
}
console.log('Hi', someObj, 'After object');


// This is how to create an error console.log.
console.error('oops');


// How to console.log a warning.
console.warn('Something is about to go wrong');


// This dependency converts all your new modurn syntax so that other older browsers can read them.
"babel-core": "^6.26.3"


// A . before a file name means that the file is a hiden file

























