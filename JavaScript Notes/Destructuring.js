// How to Implement Array Destructuring in JavaScript
const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]

  const [posts, repos, profile] = apiList;
console.log(posts);
console.log(repos);
console.log(profile);

// Another array destruction function
const coffeeList = [
    'Iced Coffee',
    'Roses',
    'Kiwi'
    ]

const [beverage, plant, fruit] = coffeeList;


// How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction
const user = {
    name: 'Liquid Silence',
    email: 'lylerogers8@gmail.com'
  }
  
  
  const renderUser = ({name, email}) => {
    console.log(`${name}: ${email}`);
  }
  
  renderUser(user);

// Another deconstruction example
const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
  }
  
  const bankInfo = ({accountNum, name, balance}) => {
    return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
  }
  
  bankInfo(bank);


// Guide to Adding Default Object Values to JavaScript Function Arguments
const blog = {
    title: 'My great post',
    // summary: 'Summary of my post'
  }
  
  const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {// This is the default incase the value of the key is not found inside the object. In this case the value of summery was not there.
    console.log(`
      og-title=${title}
      og-description=${summary}
    `);
  }
  
  openGraphMetadata(blog);

//   console:
//   "
//     og-title=My great post
//     og-description=A DailySmarty Post
//   "


// Guide to the JavaScript Spread Operator
const { starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
  }
  
  console.log(starter);
  console.log(closer);
  console.log(relievers);






















































































