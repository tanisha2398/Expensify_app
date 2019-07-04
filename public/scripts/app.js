"use strict";

console.log("app.js running");

//JSX
var appObj = {
  title: "My React App",
  subTitle: "It has a great community",
  options: []
};
// function showOption(options) {
//   if (options) {
//     return <p>Here are your options:{options}</p>;
//   } else {
//     return "nO options";
//   }
// }
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    appObj.title
  ),
  appObj.subTitle && React.createElement(
    "p",
    null,
    appObj.subTitle
  ),
  React.createElement(
    "p",
    null,
    appObj.options.length > 0 ? "Here are your options " + appObj.options : "No Options"
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
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location:",
      location
    );
  }
}
var userName = "Himani";
var userAge = 21;
var userLocation = "Rajasthan";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
