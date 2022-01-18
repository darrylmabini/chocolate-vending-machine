import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render created by text', () => {
  const { getByText } = render(<App />);
  const createdByText = getByText(/created by:/i);
  expect(createdByText).toBeInTheDocument();
});
