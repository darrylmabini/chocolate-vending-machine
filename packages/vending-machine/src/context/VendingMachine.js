import React from 'react';
import useChocovendWebServices from 'hooks/useChocovendWebServices';

export const VendingMachineContext = React.createContext({
  items: [],
  change: 0,
  balance: 0,
  formattedBalance: 0,
  dispensedItem: null,
  isDispensingItem: false,
  isDispensingChange: false,
  isAvailable: () => false,
  insertMoney: () => null,
  createTransaction: () => null,
  cancelTransaction: () => null,
  clearItem: () => null,
  formatMoney: () => null,
});

export const VendingMachineProvider = ({ children }) => {
  const { getProducts, updateProduct } = useChocovendWebServices();
  const [balance, setBalance] = React.useState(0);
  const [change, setChange] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [reloader, setReloader] = React.useState(0);
  const [isDispensingItem, setIsDispensingItem] = React.useState(false);
  const [isDispensingChange, setIsDispensingChange] = React.useState(false);
  const [dispensedItem, setDispensedItem] = React.useState(null);

  React.useEffect(() => {
    getProducts().then((products) => {
      setItems(products);
    });
  }, [reloader]);

  function isAvailable(item) {
    return balance >= item.price && item.quantity > 0;
  }

  function insertMoney(amount) {
    setBalance(Number((balance + amount).toFixed(1)));
    setChange(0);
  }

  function createTransaction(item) {
    setIsDispensingItem(true);
    setIsDispensingChange(true);
    setDispensedItem(item);

    updateProduct(item.id, {
      ...item,
      quantity: item.quantity - 1,
    }).then(() => {
      setReloader(reloader + 1);
      setTimeout(() => {
        setIsDispensingItem(false);
        setIsDispensingChange(false);
      }, 1000);
    });

    setChange(Number((balance - item.price).toFixed(1)));
    setBalance(0);
  }

  function cancelTransaction() {
    setIsDispensingChange(true);
    setChange(balance);
    setBalance(0);

    setTimeout(() => {
      setIsDispensingChange(false);
    }, 1000);
  }

  function clearItem() {
    setDispensedItem(null);
  }

  function formatMoney(amount) {
    return amount === 0 ? amount : amount < 1 ? `${amount}c` : `$${amount}`;
  }

  return (
    <VendingMachineContext.Provider
      value={{
        items,
        change,
        balance,
        formattedChange: formatMoney(change),
        formattedBalance: formatMoney(balance),
        dispensedItem,
        isDispensingItem,
        isDispensingChange,
        isAvailable,
        insertMoney,
        createTransaction,
        cancelTransaction,
        clearItem,
        formatMoney,
      }}
    >
      {children}
    </VendingMachineContext.Provider>
  );
};

export default VendingMachineProvider;
