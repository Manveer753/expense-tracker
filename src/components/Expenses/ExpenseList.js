import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";
const ExpenseList = (props) => {
  const removeExpense = (expenseKey) => {
    props.removeExpenseHandler(expenseKey);
  };

  if (props.allExpenses.length === 0) {
    return (
      <div className={styles["no-expenses-fallback"]}>No Expenses Found...</div>
    );
  }

  return (
    <>
      <div>
        {props.allExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.key + Date.now()}
              expenseItem={expense}
              removeExpenseHandler={removeExpense}
            />
          );
        })}
      </div>
    </>
  );
};

export default ExpenseList;
