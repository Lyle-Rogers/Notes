// how to do math lol
2 +2;   //pluses
4
(2 + 2);
4
2 - 3;  // mines
-1
10 / 2;  // divide
5
2 * 10;;;;;   // times
20
2 ** 10;   // to the power of
1024
5 % 2;  // magulas. You can check if a number is even or not by % by 2. 
1
10 % 2
0
22222 % 2
0
6 % 2
0

// how to make variables numbers and do math with them
var num = 2;
undefined
num++; //++ ads one or -- takes away one and it doesnt matter if is after or befor the variable
2
num;
3
++num;
4
num--;// this math some how turned out wrong. i prably copied it wrong. Or i just dont know what ++ befor num does, lol. UPDATE: When I wrote this I was an absolute retard because it is so fucking abvious what this is doing.
4
num--;
3
--num;
1


//you can literally do wierd ass mah with this.
var lyle = '100';
undefined
lyle
"100"
var enoch = + lyle;
undefined
enoch;
100


//more math tips
var someNum = 10;
undefined
var someOtherNum = -someNum;
undefined
someOtherNum;
-10
var strNum = '100';
undefined
var convertedNum = +strNum; //  + converts it from a string to a number somehow.
undefined
convertedNum;
100

// += keeps thhe equivalent of the variable and ads to it which ubdates it from what it previasly was
var sum = 0;
undefined
var gradeOne = 100;
undefined
var gradeTwo = 80;
undefined
sum += gradeOne;
100
sum;
100
sum += gradeTwo;
180
sum = sum + gradeTwo //is esentually what your doing
// you can also do *=, %=, /=, etc. and get the expected equivalent

/* order of operations// If you dont use one of these two orders your math will tearn out wrong 
PEMDAS -> PEDMAS
please excuse my dear aunt sally
Paranthesis
Exponents
Multiplication
Division
Addition
Subtraction*/


// This willl grab the highest number in the list
console.log(Math.max(1, 2, 3, 4, 520))


// How to use reduce and how to times something to the power of whatever amount of numbers you want.
const euros = [3, 3, 3];
                    // Reduce puts all the arguments into one value. total and amount are bolth the full value of all the arguments. So now ypu ** or + it and it'll + or ** all of them.
const sum = euros.reduce((total, amount) => total ** amount);

console.log(sum) 
// 19683

// how to use the reduce function in a function and what fill does
const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num); // fill s saying ther is exp amount of empty containers and you want it to fill each container with num items.
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





































