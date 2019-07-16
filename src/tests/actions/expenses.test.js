import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expence action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should edit expense", () => {
  const action = editExpense("123456", { description: "rent" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123456",
    updates: { description: "rent" }
  });
});
test("shoud setup add expense action object with provided values", () => {
  const addData = {
    description: "testing",
    note: "no note yet",
    amount: 1234.67,
    createdAt: 1234
  };
  const action = addExpense(addData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...addData,
      id: expect.any(String)
    }
  });
});
test("should setup add action object with default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
