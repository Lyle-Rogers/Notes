//_.times tool
randNumber = () => {
    return Math.random(Math.random() * 100);
}

const sampleNumbers = _.times(5, randNumber);

console.log(sampleNumbers);


// filter
const players = [
    { name: 'Bregman, A',  battingAverage: 0.284 },
    { name: 'Altuve, J',   battingAverage: 0.346 },
    { name: 'Springer, G', battingAverage: 0.283 },
    { name: 'Gurriel, Y',  battingAverage: 0.299 },
    { name: 'Gonzalez, M', battingAverage: 0.303 }
    ];

const over300 = _.filter(players, player => {
return player.battingAverage > 0.300;
});

console.log(over300);


// keyBy
const roster = [
    { position: '3B', name: 'Bregman, A' },
    { position: '2B', name: 'Altuve, J' },
    { position: 'CF', name: 'Springer, G' },
    { position: '1B', name: 'Gurriel, Y' },
    { position: 'LF', name: 'Gonzalez, M' }
    ]

    const positions = _.keyBy(roster, 'position');

    const secondBase = positions['2B'];

    console.log(secondBase);


  // Reduce grabs all the content in an arrray and ads them up into one item.
  const sum = _.reduce([1, 2, 3], function(total, num) {
    return total = num;
  }, 0); //This is where you start it at.

  console.log(sum);


    // reduce
    const sum = _.reduce([1, 2, 3], function(total, num) {
      return total + num;
    }, 0);

    const homerunStats = [
      { name: 'Bregman, A',  hr: 19 },
      { name: 'Altuve, J',   hr: 24 },
      { name: 'Springer, G', hr: 34 },
      { name: 'Gurriel, Y',  hr: 18 },
      { name: 'Gonzalez, M', hr: 23 }
    ];

    const totalHomeruns = _.reduce(homerunStats, function(total, player) {
      return total + player.hr;
    }, 0);

  console.log(totalHomeruns);//118 is the total of hr.


  // Reduce
  const links = [
    "https://google.com",
    "https://devcamp.com",
    "https://airbnb.com"
  ];

  const webLinks = _.reduce(links, function(content, link) {
    return `<a href='${link}'>${link}</a><br>`.concat(content);
  }, '');


console.log(webLinks)


 // Random
 randNumber = () => {
  return _.random(1, 100); // This gets a random number from one to a hundred.
}

const lodashSampleNumbers = _.times(5, randNumber); // This creates 5 items with the value of randNumber.

console.log(lodashSampleNumbers);






































































































