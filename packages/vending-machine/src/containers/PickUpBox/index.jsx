import React from 'react';
import useVendingMachine from 'hooks/useVendingMachine';
import { Loader } from 'components/Loader';
import { Item } from 'containers/Item';
import Styles from './PickUpBox.module.scss';

/**
 * Component for rendering the dispatched item.
 */
export const PickUpBox = () => {
  const { dispensedItem, isDispensingItem } = useVendingMachine();

  return (
    <div className={Styles.container}>
      {!dispensedItem && <div className={Styles.title}>Pickup Box</div>}
      {isDispensingItem ? (
        <Loader color="white" />
      ) : dispensedItem ? (
        <div className={Styles.item}>
          <Item item={dispensedItem} dispensed />
        </div>
      ) : null}
    </div>
  );
};

export default PickUpBox;
