import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'components/Button';

test('should renders the Button component', () => {
  const { getByText } = render(<Button>Click here</Button>);
  const buttonText = getByText(/Click here/);
  expect(buttonText).toBeInTheDocument();
});
