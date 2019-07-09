import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      console.log("fetching data");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
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
export default IndecisionApp;
