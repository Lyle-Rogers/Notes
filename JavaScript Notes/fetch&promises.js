// Promises
let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello....')
    }, 2000);
  
    setTimeout(() => {
      reject(Error('Too sleepy...'))// Error is a function in javascript that returns an error with your text
    }, 2000);
  });
  
  sleepyGreeting
    .then(data => {  // a promise expexts then to be there in order to work. then auto matically targets resolve.
      console.log(data);
    })
    .catch(err => { // err works like then but for reject instead
      console.error(err);
    });


// Using a fetch Promise to Communicate with APIs in JavaScript
console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')  //fetch is a promise operator. It fetches the url to the websight you want to perform this on.
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise // calling promise postsPromise similarly to a function
  .then(data => data.json()) // .json converted it to json
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.url_for_post); //this grabs all the urls on the sight from the sights json. You can also write posts there instead and itll console log all of Dailysmarties posts. posts is just an array in dailysmarties json code.
    });
  })
  .catch((err) => {
  console.log(err);
});


//How to Group Promises Together with Promise.all in JavaScript 
const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
  });
  
  const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating login...');
    reject('Error updating account with login');
  });
  
  const loginActivities = Promise.all([greeting, updateAccount]);// this grabs both the promises
  
  loginActivities.then(res => {
    res.forEach(activity => {
      console.log(activity);
    })
  })


// Async and Await. 
const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 2000);
    });
  }
  
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  //Await pauses the async function until every promise is returned and the values are set
  async function loginActivities() { //async is a specific function that makes the proceses accur in the right order
    const returnedLogin = await login();
    console.log(returnedLogin);// this will accur before the bottom by like 2 seconds because it comes first.
    
    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
  }
  
  loginActivities();


// This is the same as the top exept that the promises all load at the same time. Combining Async / Await with Closures to Ensure All Processes Have Run.
const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 2000);
    });
  }
  
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  
  async function loginActivities(login, updateAccount) { 
    const returnedLogin = await login;
    console.log(returnedLogin);
    
    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);// Now these both print at the same time so that one function isnt activated before the other in an order that you do not want.
  }
  
  loginActivities(login(), updateAccount());


// Using Async / Await for Communicating with Outside APIs in JavaScript. Await pauses the async function until the promise from postsPromise and reposPromise is resolved and returns a value. 
async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
  
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
  }
  
  queryApis();


// Implementing Error Handling In a JavaScript Async / Await Function and how to use the try operator.
async function queryApis() {
    try { //try makes it run both of these promises seperately
      const postsPromise = fetch('http://api.dailysmarty.com/posts');
      const posts = await postsPromise.then(res => res.json());
      console.log(posts);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the DailySmarty API'); //This is the error that gets returned if the data failed to be retreived.
    }
  
    try {
      const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
      const repos = await reposPromise.then(res => res.json());
      console.log(repos);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the GitHub API');
    }
  }
  
  queryApis();


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












