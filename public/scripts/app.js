"use strict";

console.log("app.js running");

//JSX
var appObj = {
  title: "My React App",
  subTitle: "It has a great community"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    appObj.title
  ),
  React.createElement(
    "p",
    null,
    appObj.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
var user = {
  name: "tani",
  age: 21,
  location: "kota"
};
var userName = "Himani";
var userAge = 21;
var userLocation = "Rajasthan";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location:",
    userLocation
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
