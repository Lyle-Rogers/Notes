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


 // How to use console.table. This prints out a list of objects in the turminal as a table list. 
 const playerNames = [
    { name: 'Altuve', pos: '2b' },
    { name: 'Corea', pos: 'ss' },
    { name: 'Bregman', pos: '3b' },
  ]

























