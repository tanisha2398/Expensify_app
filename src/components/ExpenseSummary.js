import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpenseTotal from "../selectors/expenses-total";

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <p>
        Viewing {expenseCount} {expenseWord} totalling
        {formattedExpensesTotal}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpense = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpense.length,
    expensesTotal: getExpenseTotal(visibleExpense)
  };
};
export default connect(mapStateToProps)(ExpenseSummary);
