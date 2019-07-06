class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide" : "Show"}
        </button>
        {this.state.visibility && <div>hey</div>}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const appObj = {
//   title: "Visibility Toggle"
// };
// let visibility = false;

// const togglevisiblity = () => {
//   visibility = !visibility;
//   renderApp();
// };
// const appRoot = document.getElementById("app");
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{appObj.title}</h1>
//       <button onClick={togglevisiblity}>{visibility ? "Hide" : "Show"}</button>
//       {visibility && <div>hey</div>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// renderApp();
