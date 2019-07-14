import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SET_START_DATE
const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});
//SET_END _DATE
const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});

//Expences reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
//Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});
const expenseOne = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 300
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 500
  })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));
store.dispatch(setTextFilter("rent"));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(setStartDate(123));
store.dispatch(setStartDate());
store.dispatch(setEndDate(900));
const demoState = {
  expenses: [
    {
      id: "poiuytre",
      description: "Jan Rent",
      note: "this was the final payment for the address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
