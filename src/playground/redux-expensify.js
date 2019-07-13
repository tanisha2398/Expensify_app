import { createStore, combineReducers } from "redux";

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
