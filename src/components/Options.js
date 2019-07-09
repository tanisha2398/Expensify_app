import React from "react";
import Option from "./Option";
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOption}>Remove All</button>
      {props.options.length === 0 && <p>Please add option to get started!</p>}
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
export default Options;