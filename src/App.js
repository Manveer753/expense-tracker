import { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// Creating an empty array of expenses
const EMPTY_EXPENSES = [];
const LOCAL_STORAGE_KEY = "expense-tracker.expenses";

function App() {
  // Creating a state with the expenses stored in localStorage
  const [expenses, setExpenses] = useState(() => {
    const expensesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (expensesJSON != null) {
      return JSON.parse(expensesJSON);
    } else {
      // If no expenses are found in localStorage, it creates the state with the EMPTY_EXPENSES array
      return EMPTY_EXPENSES;
    }
  });

  // useEffect hook to update the localStoarge every time the expenses state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

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
