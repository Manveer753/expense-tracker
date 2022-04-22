import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// Creating an empty array of expenses
const EMPTY_EXPENSES = [];

function App() {
  // Creating a state for the expenses, which is first initialized to the EMPTY_EXPENSES array
  const [expenses, setExpenses] = useState(EMPTY_EXPENSES);

  // const expensesStored = localStorage.getItem("expensesStored");
  // if (expensesStored) {
  //   setExpenses(expensesStored);
  // }
  // Adding an expense
  const addExpense = (expense) => {
    // Using the previous state
    setExpenses((prevExpenses) => {
      // Using the spread operator to add all expenses from the previous state
      return [expense, ...prevExpenses];
    });
    // localStorage.clear();
    // localStorage.setItem("expensesStored", JSON.stringify(expenses));
  };

  // Removing an expense
  const removeExpense = (expenseKey) => {
    // Converting expenseKey (passed as a prop all the way from NewExpenseForm.js) to a number
    const expenseKeyNum = Number(expenseKey);
    // Using filter to return a new array that does not contain the expense we want to remove
    const newExpenses = expenses.filter((expense) => {
      // Checking which expense has the same key as expenseKey (got from the value of the delete button click)
      return expense.key !== expenseKeyNum;
    });

    // setting new state for expense, re-renders
    setExpenses(newExpenses);
    // localStorage.clear();
    // localStorage.setItem("expensesStored", JSON.stringify(expenses));
  };

  return (
    <>
      <NewExpense addExpenseHandler={addExpense} />
      <Expenses allExpenses={expenses} removeExpenseHandler={removeExpense} />
    </>
  );
}

export default App;
