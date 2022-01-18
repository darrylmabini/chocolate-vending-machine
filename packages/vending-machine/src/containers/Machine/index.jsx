import React from 'react';
import useVendingMachine from 'hooks/useVendingMachine';
import { Header } from 'components/Header';
import { Logo } from 'components/Logo';
import { Item } from 'containers/Item';
import { Menu } from 'containers/Menu';
import { MoneyChanger } from 'containers/MoneyChanger';
import { PickUpBox } from 'containers/PickUpBox';
import Styles from './Machine.module.scss';

/**
 * Component for rendering the vending machine.
 */
export const Machine = () => {
  const { formattedBalance, items } = useVendingMachine();

  return (
    <div className={Styles.container}>
      <Header balance={formattedBalance} logo={<Logo title="ChocoVendy" src="chocovend-logo.png" alt="Chocovend" />} />

      <div className={Styles.cabinet}>
        <div className={Styles.items}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>

        <div className={Styles.trays}>
          <PickUpBox />
          <MoneyChanger />
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Machine;
