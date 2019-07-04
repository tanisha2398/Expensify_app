"use strict";

console.log("app.js running");

//JSX
var appObj = {
  title: "My React App",
  subTitle: "It has a great community",
  options: ["one", "two"]
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
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

// console.log(templateTwo);
// const user = {
//   name: "tani",
//   age: 21,
//   location: "kota"
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
// }
// // var userName = "Himani";
// // var userAge = 21;
// // var userLocation = "Rajasthan";
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>

//     {user.age && user.age >= 18 && <p>Age:{user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count:",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
