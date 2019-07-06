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
  handlePick() {
    alert("Handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do??</button>
      </div>
    );
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert("handle remove");
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optiontext={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
