const appObj = {
  title: "Visibility Toggle"
};
let visibility = false;

const togglevisiblity = () => {
  visibility = !visibility;
  renderApp();
};
const appRoot = document.getElementById("app");
const renderApp = () => {
  const template = (
    <div>
      <h1>{appObj.title}</h1>
      <button onClick={togglevisiblity}>{visibility ? "Hide" : "Show"}</button>
      {visibility && <div>hey</div>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
