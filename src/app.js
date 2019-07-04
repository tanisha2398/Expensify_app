console.log("app.js running");

//JSX
var appObj = {
  title: "My React App",
  subTitle: "It has a great community"
};
var template = (
  <div>
    <h1>{appObj.title}</h1>
    <p>{appObj.subTitle}</p>
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
    <h1>{user.name}</h1>
    <p>Age:{userAge}</p>
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
