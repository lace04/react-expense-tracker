import { useGlogalState } from '../../context/GlobalState';

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlogalState();
  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm'>{transaction.description}</p>
      <div className=''>
        <span>$ {transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className='bg-red-500 text-white text-sm px-1 rounded-full ml-3'
        >
          x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
