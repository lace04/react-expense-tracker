import { useGlogalState } from '../context/GlobalState';

function IncomeExpenses() {
  const { transactions } = useGlogalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className='flex justify-between my-2'>
        <h4>Income</h4>
        <p className=''>${income}</p>
      </div>
      <div className='flex justify-between my-2'>
        <h4>Expense</h4>
        <p className=''>${expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
