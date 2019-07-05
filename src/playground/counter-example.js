let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
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
const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
