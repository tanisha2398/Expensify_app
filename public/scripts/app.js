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
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = " ";
    renderApp();
  }
};
var removeAll = function removeAll() {
  appObj.options = [];
  console.log(appObj.options);
  renderApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appObj.options.length);
  var option = appObj.options[randomNum];
  console.log(option);
};

var appRoot = document.getElementById("app");

// const numbers = [23, 24, 25];

var renderApp = function renderApp() {
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
      appObj.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
      "button",
      { disabled: appObj.options <= 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      appObj.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
