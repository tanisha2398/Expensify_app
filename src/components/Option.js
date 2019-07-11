import React from "react";
const Option = props => (
  <div>
    {props.optiontext}
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
