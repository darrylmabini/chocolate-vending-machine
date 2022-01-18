import React from 'react';
import useVendingMachine from 'hooks/useVendingMachine';
import { Button } from 'components/Button';
import Styles from './Menu.module.scss';

/**
 * Component for rendering the vending machine menu.
 */
export const Menu = () => {
  const { insertMoney, cancelTransaction, isDispensingItem, isDispensingChange } = useVendingMachine();
  const [showMoneySelection, setShowMoneySelection] = React.useState(false);

  React.useEffect(() => {
    if (isDispensingItem || isDispensingChange) {
      setShowMoneySelection(false);
    }
  }, [isDispensingItem, isDispensingChange]);

  function handleInsertMoney(e) {
    insertMoney(Number(e.target.dataset.amount));
  }

  function handleInsertMoneySelection() {
    setShowMoneySelection(!showMoneySelection);
  }

  function handleCancelTransaction() {
    setShowMoneySelection(false);
    cancelTransaction();
  }

  return (
    <div className={Styles.menu}>
      {showMoneySelection && (
        <div className={Styles['money-selection']}>
          <div className={Styles['money-selection-items']}>
            <Button data-amount=".10" onClick={handleInsertMoney}>
              10c
            </Button>
            <Button data-amount=".20" onClick={handleInsertMoney}>
              20c
            </Button>
            <Button data-amount=".50" onClick={handleInsertMoney}>
              50c
            </Button>
            <Button data-amount="1" onClick={handleInsertMoney}>
              $1
            </Button>
            <Button data-amount="2" onClick={handleInsertMoney}>
              $2
            </Button>
          </div>
        </div>
      )}
      <div className={Styles.actions}>
        <div>
          <Button color="red" onClick={handleCancelTransaction}>
            Cancel
          </Button>
        </div>
        <div>
          <Button color="green" onClick={handleInsertMoneySelection}>
            Insert money
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
