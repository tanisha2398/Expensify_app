console.log("app.js running");

//JSX
const appObj = {
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
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = " ";
    renderApp();
  }
};
const removeAll = () => {
  appObj.options = [];
  console.log(appObj.options);
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObj.options.length);
  const option = appObj.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById("app");

// const numbers = [23, 24, 25];

const renderApp = () => {
  const template = (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subTitle && <p>{appObj.subTitle}</p>}
      <p>
        {appObj.options.length > 0 ? "Here are your options" : "No Options"}
      </p>
      <button disabled={appObj.options <= 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {appObj.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
