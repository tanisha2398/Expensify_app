class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put Your Life in Hand of Computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do??</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
