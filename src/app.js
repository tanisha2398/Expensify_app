console.log("app.js running");

//JSX
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Tanisha Negi</h1>
    <p>Age:21</p>
    <p>Location:Rawatbhata</p>
  </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
