// This is a for loop
var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {
    console.log(player);
    console.log(players[player]);
  }


// Build a Weighted Lottery Function in JavaScript. 
const weightedLottery = weights => {
  let containerArray = [];
  Object.keys(weights).forEach(key => {
    for (let i = 0; i < weights[key]; i++) {// for loop
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




























  