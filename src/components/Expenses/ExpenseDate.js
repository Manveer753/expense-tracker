import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  return (
    <div className={styles["date-container"]}>
      <span className={styles["month"]}>
        {props.expenseDate.toLocaleString("en-US", { month: "long" })}
      </span>
      <span className={styles["date"]}>
        {props.expenseDate.toLocaleString("en-US", { day: "2-digit" })}
      </span>
      <span className={styles["year"]}>{props.expenseDate.getFullYear()}</span>
    </div>
  );
};

export default ExpenseDate;
