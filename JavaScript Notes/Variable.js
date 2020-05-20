// Const is how you make your variables unchangable. While var can be easily accedentaly redefined.


// How to Swap Variable Values in JavaScript with Variable Deconstruction 
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

[playerOne, playerTwo] = [playerTwo, playerOne]; // Literaly that simple

// another way
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

// Another
function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    [leftLane, rightLane] = [rightLane, leftLane];
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();




























