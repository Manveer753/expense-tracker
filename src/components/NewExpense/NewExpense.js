import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const newExpense = (expense) => {
    props.addExpenseHandler(expense);
  };

  return (
    <>
      <NewExpenseForm formSubmitHandler={newExpense} />
    </>
  );
};

export default NewExpense;
