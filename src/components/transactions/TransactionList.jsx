import { useGlogalState } from '../../context/GlobalState';
import { TransactionItem } from './TransactionItem';

function TransactionList() {
  const { transactions } = useGlogalState();
  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block'>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
