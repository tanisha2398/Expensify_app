import React from "react";
import { connect } from "react-redux";
const ExpenseItem = ({ description, amount, createdAt }) => (
  <div>
    <h1>{description}</h1>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);

export default ExpenseItem;
