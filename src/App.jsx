import { GlobalContextProvider } from './context/GlobalState';
import Header from './components/Header';
import TransactionForm from './components/transactions/TransactionForm';
import Balance from './components/Balance';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseChart from './components/ExpenseChart';

function App() {
  return (
    <GlobalContextProvider>
      <div className='bg-zinc text-white h-screen flex justify-center items-center mt-6'>
        <div className='container mx-auto w-3/5'>
          <div className='bg-zinc-800 p-10 rounded-lg flex justify-around'>
            <div className=''>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
