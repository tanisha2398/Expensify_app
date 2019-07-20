import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("should correctly render ExpenseSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expensesTotal={234} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpenseSummary with multiple expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={23} expensesTotal={23524321523} />
  );
  expect(wrapper).toMatchSnapshot();
});
