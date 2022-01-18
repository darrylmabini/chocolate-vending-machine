import React from 'react';
import Styles from './Header.module.scss';

/**
 * Component to render the Header.
 */
export const Header = ({ logo, balance }) => (
  <header className={Styles.header}>
    <div>{logo}</div>
    <div>Balance: {balance}</div>
  </header>
);

Header.defaultProps = {
  balance: '0',
  logo: null,
};
