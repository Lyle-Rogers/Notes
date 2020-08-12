// Basic Guide to Importing and Exporting Code in JavaScript with ES6 Syntax
export function multiply(numOne, numTwo) { 
    return numOne * numTwo
}

import { multiply } from './helper'; // The import. This is how you import something you created.

console.log(multiply(2, 5));


// How to creat an export. Guide to Default Exports in JavaScript.
export function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

export const greeting = 'Hi there';  // made this variable an export by writing greeting before it. Now i can import it.

// How to import your export.  
import * as helper from './helper'; 

console.log(helper.greeting);
console.log(helper.multiply(5, 6));


// This is a default export
export default function () {
  return '<div>Logo</div';
}


// How to import multiple exports at once.
import navigation, { greeting, multiply } from './navigation';

console.log(greeting);


// This dependency converts all your new modurn syntax so that other older browsers can read them.
"babel-core": "^6.26.3"


// Birthday function. Moment is clock that has been counting ever sence 1970. 
import moment from 'moment';

const rightNow = moment();

console.log(rightNow);

const birthday = moment('2002-10-14', 'YYY-MM-DD');
// birthday.format is finding the day i was born on. So on my console it printed monday.
console.log(birthday.format("dddd"));
// This tells you how long ago that day accured. so you can find exactly how many days you've been alive.
console.log(birthday.fromNow());


// This is a sight that shows you all the syntax for working with moment so that you can do awesome extraordanary shit with time simply.
https://devhints.io/moment


// I could of done this instead of waisting hours trying to do something fucking similair
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST"
// I can export a fucking const or let or any fucking godds damns variable i want!!!!!


// How to import a url as a background image. This allows an image to be brought in from somewhere else and not have to be hard codded.
<div
    className="portfolio-img-background"
    style={{   // The double brackets is because style is expecting an item name wich should of been in the first pair of brackets but in this case no name was given. The second pair of qurelly brackets works simulair to css. So it's where you place your styles, which is the background image.
        backgroundImage: "url(" + thumb_image_url + ")"
    }} 
/>


// How to import an image from another file.
import React, { Component } from "react";
import loginImg from "../../../static/assets/images/auth/login.jpg"; // This is the directory of the image. The ../ is to go back a directory.

export default class Auth extends Component {
    render() {
        return (
        <div className="auth-page-wrapper">
            <div 
                className="left-column"
                style={{
                    backgroundImage: `url(${loginImg})` // This is where I called the image I imported. 
                }} 
            />
            <div className="right-column">
                <h1>Login component goes here...</h1>    
            </div>    
        </div>
        )
    }
}














