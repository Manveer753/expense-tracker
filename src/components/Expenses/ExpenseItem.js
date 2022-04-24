import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const removeItem = (event) => {
    props.removeExpenseHandler(event.target.value);
  };

  const expenseDate = new Date(props.expenseItem.date);

  return (
    <div className={styles["outer-list-item"]}>
      <div className={styles["expense-item-info"]}>
        <ExpenseDate expenseDate={expenseDate} />
        <div className={styles["expense-title"]}>{props.expenseItem.title}</div>
      </div>

      <div className={styles["expense-item-amount-info"]}>
        <div className={styles["expense-amount"]}>
          ${props.expenseItem.amount}
        </div>
        <button
          className={styles["delete-item__btn"]}
          value={props.expenseItem.key}
          onClick={removeItem}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
