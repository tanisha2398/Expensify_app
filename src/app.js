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
var template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subTitle && <p>{appObj.subTitle}</p>}
    <p>
      {appObj.options.length > 0
        ? "Here are your options " + appObj.options
        : "No Options"}
    </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var user = {
  name: "tani",
  age: 21,
  location: "kota"
};
function getLocation(location) {
  if (location) {
    return <p>Location:{location}</p>;
  }
}
var userName = "Himani";
var userAge = 21;
var userLocation = "Rajasthan";
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>

    {user.age && user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
