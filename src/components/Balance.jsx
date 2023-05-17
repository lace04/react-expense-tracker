import { useGlogalState } from '../context/GlobalState';

function Balance() {
  const { transactions } = useGlogalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='flex justify-between'>
      {/* {JSON.stringify(amounts, null, 2)} */}
      <h3 className='text-2xl mb-8'>Your Balance</h3>
      <h1 className='text-4xl font-bold text-slate-400'>${total}</h1>
    </div>
  );
}

export default Balance;
