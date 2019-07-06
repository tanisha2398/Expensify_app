class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ["Thing 1", "Thing 5", "Thing 3"]
    };
  }
  handleDeleteOption() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put Your Life in Hand of Computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I do??
        </button>
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
        <button onClick={this.props.handleDeleteOption}>Remove All</button>
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
