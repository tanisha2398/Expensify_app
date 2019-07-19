import React from "react";
import moment from "moment";
import numeral from 'numeral';
import { Link } from "react-router-dom";
export const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount).format("$0,0.00")}-{moment(createdAt).format("MMMM Do, YYYYY")}
    </p>
  </div>
);

export default ExpenseItem;
