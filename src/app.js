//stateless fuctional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  handleDeleteOption() {
    this.setState(() => ({ options: [] }));
  }
  handleDelete(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this item already exist";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }
  render() {
    const subtitle = "Put Your Life in Hand of Computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDelete={this.handleDelete}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do??
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {

//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOption}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optiontext={option}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.options.map(option => (
//           <Option key={option} optiontext={option} />
//         ))}
//         <button onClick={this.props.handleDeleteOption}>Remove All</button>
//       </div>
//     );
//   }
// }
const Option = props => {
  return (
    <div>
      {props.optiontext}
      <button
        onClick={e => {
          props.handleDelete(props.optiontext);
        }}
      >
        Remove
      </button>
    </div>
  );
};
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optiontext}</div>;
//   }
// }
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Age:{props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
