import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortby to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should sort by date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = { type: "SET_TEXT", text: "Tea" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("Tea");
});

test("should set startDate filter", () => {
  const startDate = moment();
  // console.log("============================================", startDate);
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducer(undefined, action);
  // console.log("============================================", state.startDate);
  expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
  const endDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
