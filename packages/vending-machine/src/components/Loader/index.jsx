import React from 'react';
import PropTypes from 'prop-types';
import useCss from 'hooks/useCss';
import Styles from './Loader.module.scss';

/**
 * Component to display a Loader.
 */
export const Loader = ({ loadingText, color }) => {
  const css = useCss();
  const [colorStyle, setColorStyle] = React.useState(Styles.violet);

  React.useEffect(() => {
    switch (color) {
      case 'white':
        setColorStyle(Styles.white);
        break;

      default:
        setColorStyle(colorStyle);
    }
  }, [color]);

  return (
    <React.Fragment>
      <div className={Styles.wrapper}>
        <div className={css(Styles.dot, colorStyle)}></div>
        <div className={css(Styles.dot, colorStyle)}></div>
        <div className={css(Styles.dot, colorStyle)}></div>
      </div>
      {loadingText && <div className={Styles.text}>{loadingText}</div>}
    </React.Fragment>
  );
};

Loader.defaultProps = {
  loadingText: null,
};

Loader.propTypes = {
  /** The loading text to display */
  loadingText: PropTypes.string,
};
