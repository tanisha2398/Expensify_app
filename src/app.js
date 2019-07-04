console.log("app.js running");

//JSX
const appObj = {
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
const template = (
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
let count = 0;
const addOne = () => {
  console.log("addOne");
};
const minusOne = () => {
  console.log("minusOne");
};
const reset = () => {
  console.log("reset");
};
const templateTwo = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);
console.log(templateTwo);
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
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
