import { createContext, useContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialSate = {
  transactions: [],
};

export const GlobalContext = createContext();

export const useGlogalState = () => {
  const globalContext = useContext(GlobalContext);
  return globalContext;
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialSate, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialSate;
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
