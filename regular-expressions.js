// a wregular expression tells the user that his phone number has to be a specific type. regular exspressions is why on some sitess our pasword has to be a spacific type.
str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
null
'(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
(4) ["(555)555-5555", "(555)", "(555)", undefined, index: 0, input: "(555)555-5555", groups: undefined]


// this is how you can search for something. this is searching for the regular expression.
'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
0
'foo'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
-1
'foo 555-555-5555 is my number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
4

// This is a regular expression that brings back the query even though the full name of the query was not defined
"name": "Deep Work: Rules for Focused Success in a Distracted World"// this is the full name
db.books.findOne({ name: /.*deep work.*/i }) // deep work is part of the full name but the regular expression allowes it to work as well. db meands data base. db.books is an api call.
