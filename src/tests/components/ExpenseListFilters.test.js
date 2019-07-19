import React from "react";
import { shallow } from "enzyme";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setTextFilter={setTextFilter}
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

test("should handle text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: {
      value
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test("should sort by amount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

// test("should handle date change", () => {
//   const startDate = moment(0).add(4, "years");
//   const endDate = moment(0).add(8, "years");
//   wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
//   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });
