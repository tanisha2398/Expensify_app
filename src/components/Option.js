import React from "react";
const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optiontext}
    </p>

    <button
      className="button button--link"
      onClick={e => {
        props.handleDelete(props.optiontext);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
