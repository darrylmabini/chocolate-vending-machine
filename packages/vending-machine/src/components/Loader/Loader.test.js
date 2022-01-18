import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from 'components/Loader';

test('should renders the Loader component', () => {
  const { getByText } = render(<Loader loadingText="Loading" />);
  const LoadingText = getByText(/Loading/);
  expect(LoadingText).toBeInTheDocument();
});
