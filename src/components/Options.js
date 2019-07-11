import React from "react";
import Option from "./Option";
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOption}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add option to get started!</p>
    )}
    {props.options.map(option => (
      <Option
        key={option}
        optiontext={option}
        handleDelete={props.handleDelete}
      />
    ))}
  </div>
);
export default Options;
