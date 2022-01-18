import React from 'react';
import useCss from 'hooks/useCss';
import Styles from './Button.module.scss';

/**
 * Component to render the Button.
 */
export const Button = ({ color, children, ...restProps }) => {
  const css = useCss();
  const [colorStyle, setColorStyle] = React.useState(Styles.primary);

  React.useEffect(() => {
    switch (color) {
      case 'green':
        setColorStyle(Styles.green);
        break;

      case 'red':
        setColorStyle(Styles.red);
        break;

      case 'gray':
        setColorStyle(Styles.gray);
        break;

      default:
        setColorStyle(colorStyle);
    }
  }, [color]);

  return (
    <button className={css(Styles.button, colorStyle)} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
};
