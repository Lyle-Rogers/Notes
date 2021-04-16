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
  try { //try makes it run both of these promises seperately so that one can run before the other.
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































































































































