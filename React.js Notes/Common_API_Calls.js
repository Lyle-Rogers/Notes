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



















  