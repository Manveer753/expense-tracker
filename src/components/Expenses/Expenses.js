import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import styles from "./Expenses.module.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onYearChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.allExpenses.filter((expense) => {
    // Converting the expense.date to date, which was converted to a string when storing in local storage
    const expenseDate = new Date(expense.date);
    // Returning all expenses that match the filteredYear
    return expenseDate.getFullYear().toString() === filteredYear;
  });

  const removeExpense = (expenseKey) => {
    props.removeExpenseHandler(expenseKey);
  };
  return (
    <div className={styles["expenses"]}>
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilterChange={onYearChange}
      />
      <ExpenseList
        allExpenses={filteredExpenses}
        removeExpenseHandler={removeExpense}
      />
    </div>
  );
};

export default Expenses;
