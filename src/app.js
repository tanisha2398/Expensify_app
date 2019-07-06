class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put Your Life in Hand of Computer";
    const options = ["Thing 1", "Thing 2", "Thing 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {this.props.options.map(option => (
          <Option key={option} optiontext={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optiontext}</div>;
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
