"use strict";

console.log("app.js running");

//JSX
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Tanisha Negi"
  ),
  React.createElement(
    "p",
    null,
    "Age:21"
  ),
  React.createElement(
    "p",
    null,
    "Location:Rawatbhata"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
