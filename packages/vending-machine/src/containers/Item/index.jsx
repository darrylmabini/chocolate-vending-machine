import React from 'react';
import useConfig from 'hooks/useConfig';
import useVendingMachine from 'hooks/useVendingMachine';
import { Button } from 'components/Button';
import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';
import Styles from './Item.module.scss';

/**
 * Component for rendering the item.
 */
export const Item = ({ item, dispensed }) => {
  const { CHOCOVEND_API_URL } = useConfig();
  const { balance, isAvailable, formatMoney, createTransaction, clearItem } = useVendingMachine();
  const [isItemAvailable, setIsItemAvailable] = React.useState(false);

  React.useEffect(() => {
    setIsItemAvailable(isAvailable(item));
  }, [balance, item]);

  function handleGetItem() {
    if (dispensed) {
      clearItem();
    } else {
      createTransaction(item);
    }
  }

  return (
    <div className={Styles.item}>
      <Card>
        {!dispensed && <div className={Styles.price}>{formatMoney(item.price)}</div>}
        <CardHeader>{item.name}</CardHeader>
        <CardBody>
          <img
            className={item.quantity === 0 ? Styles.soldout : ''}
            src={CHOCOVEND_API_URL + item.image}
            width="100"
            height="100"
          />
        </CardBody>
        <React.Fragment>
          <CardFooter>
            <Button
              color={isItemAvailable || dispensed ? 'green' : 'gray'}
              disabled={!isItemAvailable && !dispensed}
              onClick={handleGetItem}
            >
              {item.quantity > 0 ? (dispensed ? 'Get Item' : 'Select') : 'Sold Out'}
            </Button>
          </CardFooter>
        </React.Fragment>
      </Card>
    </div>
  );
};

export default Item;
