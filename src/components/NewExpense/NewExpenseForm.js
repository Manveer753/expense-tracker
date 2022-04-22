import { useState } from "react";
import styles from "./NewExpenseForm.module.css";

const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (title !== "" && amount !== "" && date !== null) {
      const expense = {
        key: Date.now(),
        title: title,
        amount: +amount,
        date: new Date(date),
      };

      props.formSubmitHandler(expense);

      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  const cancelForm = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <ul className={styles["form-outer"]}>
        <li>
          <label htmlFor="expense-title">Title:</label>
          <input
            id="expense-title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="expense-amount">Amount:</label>
          <input
            id="expense-amount"
            type="number"
            min="0.01"
            step="0.01"
            max="1000000"
            value={amount}
            onChange={amountChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="expense-date">Date:</label>
          <input
            id="expense-date"
            type="date"
            min="2017-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </li>
        <div className={styles["buttons"]}>
          <button type="submit">Add Expense</button>
          <button onClick={cancelForm}>Cancel</button>
        </div>
      </ul>
    </form>
  );
};

export default NewExpense;
