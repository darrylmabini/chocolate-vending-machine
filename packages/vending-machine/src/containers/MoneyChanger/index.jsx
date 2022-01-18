import React from 'react';
import useVendingMachine from 'hooks/useVendingMachine';
import { Loader } from 'components/Loader';
import Styles from './MoneyChanger.module.scss';

/**
 * Component for rendering the dispatched money changed.
 */
export const MoneyChanger = () => {
  const { change, formattedChange, isDispensingChange } = useVendingMachine();

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>Get your change</div>
      {isDispensingChange ? <Loader /> : change > 0 ? <div className={Styles.amount}>{formattedChange}</div> : null}
    </div>
  );
};

export default MoneyChanger;
