import React from 'react';
import Styles from './Logo.module.scss';

/**
 * Component to display the Logo.
 */
export const Logo = ({ title, ...restProps }) => (
  <div className={Styles.container}>
    <img className={Styles.logo} {...restProps} />
    {title && <div className={Styles.title}>{title}</div>}
  </div>
);

Logo.defaultProps = {
  title: null,
  src: null,
  alt: null,
};
