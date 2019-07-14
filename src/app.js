import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import expensesReducer from "./reducers/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AddExpensePage from "./components/AddExpensePage";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("rent"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
// ReactDOM.render(<AppRouter />, document.getElementById("app"));
