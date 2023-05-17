import { VictoryPie, VictoryLabel } from 'victory';
import { useGlogalState } from '../context/GlobalState';

function ExpenseChart() {
  const { transactions } = useGlogalState();

  // const total = transactions.reduce(
  //   (acc, transaction) => (acc += transaction.amount),
  //   0
  // );

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncomes) * 100
  );

  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        { x: 'Expenses', y: totalExpensesPercentage },
        { x: 'Income', y: totalIncomesPercentage },
      ]}
      animate={{
        duration: 2000,
      }}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: 'white',
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
