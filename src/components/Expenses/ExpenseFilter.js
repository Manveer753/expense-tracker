import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    const year = event.target.value;
    props.onFilterChange(year);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filterer"]}>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2019">2018</option>
          <option value="2019">2017</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
