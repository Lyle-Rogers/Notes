// the computer works off 1s and 0s and this is how you write that with words. 
Number(true);
1
Number(false);
0
// computers science always starts with 0


// this how to check how long a string is
str.length;
9


// this is how to check what letter is the second one in a string
str.charAt(2);
"m"


// .concat will rewrite what its linking to and ad again and again after it which was something.
str.concat(' again and again');
"something again and again"


// this is cool. the str = something and the rest is abvious
str.includes('quick');
false
str;
"something"
str.includes('foo');
false
str.startsWith('something');
true
str.endsWith('g');
true
str.includes('o');
true

// this will repeat your sentance how ever many times you want
var str = 'The quick brown fox jumped over the lazy dog';
undefined
str.repeat(5);
"The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"
//that last sentance has every letter in the alfabet. Fuck that, never mind it was a lie. Jordan needs to get his shit together.


// to make a string ad '' or "" to what you want to be considered a string.


// this is to replace something with what you want instead
var str = 'The quick brown fox jumped over the lazy dog';
str.replace('fox', 'wolf');
"The quick brown wolf jumped over the lazy dog"


// this is how you find the index of something
str;
"The quick brown fox jumped over the lazy dog"

str.indexOf('jumped');
20
var str2 = str.concat(' again and again');
undefined
str2;
"The quick brown fox jumped over the lazy dog again and again"
str2.indexOf('again');
45
str2.lastIndexOf('again');
55


// this is how you can slice something so that you can have your sentence cut and repeated
str;
"The quick brown fox jumped over the lazy dog"
str.slice('10');
"brown fox jumped over the lazy dog"
str.slice(-8);
"lazy dog"
str.slice(4, 10)
"quick "
str.slice(4, 9)
"quick"


// this is how you take away extra space i think
var messyString = '   foo    ';
undefined
messyString.trim();
"foo"


// you can even put two comands together
str;
"The quick brown fox jumped over the lazy dog"
str.slice(4, 10)
"quick "
str.slice(4, 10).trim();
"quick"


//how to make everything upper case and lowercase
str.toUpperCase();
"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
str.toLowerCase();
"the quick brown fox jumped over the lazy dog"


//  an array can store any items unlike a string
var generatedArray = new Array('Altuve', 'Correa', 'Spring');
// To pull obect out of an array write the arrays name, put [] after it and put the number of the item u want to pull out.
generatedArray[0];
"Altuve"

// to take an item out of an array at the end of the array put the name then pop(); like in this example
var arr = ['Altuve', 'Bregmn', 'Correa', 'Springer'];
undefined
arr.length;
4
arr;
(4) ["Altuve", "Bregmn", "Correa", "Springer"]0: "Altuve"1: "Bregmn"2: "Correa"3: "Springer"length: 4__proto__: Array(0)
arr.length;
4
arr.pop();
"Springer"
arr;
(3) ["Altuve", "Bregmn", "Correa"]

// to put an item into the end of an array put the name then .push then the item you wish to put in.
["Altuve", "Bregmn", "Correa"]
arr.push('bagwell');
arr;
(4) ["Altuve", "Bregmn", "Correa", "bagwell"]

//shift puts an item into the front of an array and unshift takes an item out of the front of an array.
arr.shift();
"Altuve"
arr.unshift('kyle');
3
arr;
(3) ["kyle", "Bregmn", "Correa"]

// if you dont put () at the end of a function it wont work

// splice lets you take out whatever element you want in a array
arr; //This is the array
(3) ["Altuve", "Bregman", "Spring"]//this is whats in the array
arr.splice(1, 2);// this is saying what to splice out of the array
(2) ["Bregman", "Spring"]//this is what the computer wrote back when the function was excecuted
arr;
["Altuve"]//now this is all thats left in the array


// Its easiery and better to use string interpilation insted of complicated shit. You can place as many variables as you want i the curly brackets.
const lyrics = 'Switchblades';
console.log(`I love ${lyrics}`);


//combining Arrays
let shoppingCart = [345, 375, 765, 123];

let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]


// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));













































