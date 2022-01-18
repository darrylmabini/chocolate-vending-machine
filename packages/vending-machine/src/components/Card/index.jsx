import React from 'react';
import Styles from './Card.module.scss';

/**
 * Component to render the Card.
 */
export const Card = ({ children }) => <div className={Styles.card}>{children}</div>;

export const CardHeader = ({ children }) => <div className={Styles.header}>{children}</div>;

export const CardBody = ({ children }) => <div className={Styles.body}>{children}</div>;

export const CardFooter = ({ children }) => <div className={Styles.footer}>{children}</div>;
