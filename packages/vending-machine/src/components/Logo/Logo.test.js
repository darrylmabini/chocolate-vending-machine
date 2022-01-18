import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from 'components/Logo';

test('should renders the Logo component', () => {
  const { asFragment } = render(<Logo />);
  expect(asFragment).toMatchSnapshot();
});
