import React from "react";
import { shallow } from "enzyme";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";

let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilters = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setTextFilters={setTextFilters}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      filters={filters}
    />
  );
});

test("should render expenselistfilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should render expenselistfilters with altdata correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});
