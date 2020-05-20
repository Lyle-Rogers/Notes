// Constructor function
class Instructor {
    constructor({ name }) {
      this.name = name;//this.name is equal to name but is not the same object.
    }
  }

  const jon = new Instructor({ name: 'Jon Snow' });
  console.log(jon.name);


// Guide to JavaScript OOP Instance Methods
class Instructor {
constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
}

renderDetails() {
    console.log(`${this.name}: ${this.role}`)
}
}

const jon = new Instructor({ name: 'Jon Snow'});
const brayden = new Instructor({ name: 'Brayden', role: 'teacher'});

jon.renderDetails();
brayden.renderDetails();


// Another example of this this shit that i understand but do not know how to classify.
class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({year: 2020, brand: 'Tesla', poweredBy: 'electricity'});


// A class should only have one thing to do.


// Guide to OOP Static Methods in JavaScript
class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom');
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  
  Instructor.helloWorld(); // "Hi there"
  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
  );


// How to Create a Custom Error Class in JavaScript. But this fucker isn't working.
class DevcampError extends Error { /// This is just a normal class with blueprints that run costume errors.
  constructor(msg = 'An error occurred', ...params) { // This is what is printed first.
    super(...params);

    this.msg = msg;
  }
}


function siteComponent(func) {
  return func();
}

try {
  console.log(siteComponent('oops')); // This ooops here is whats causing the error to accure.
} catch(e) {
  throw new DevcampError('DevcampError', e); // This will be printed as the error type.
}

widget = () => {
  return '<div>Hi there</div>';
}


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






















