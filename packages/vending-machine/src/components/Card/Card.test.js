import React from 'react';
import { render } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';

test('should renders the Card component', () => {
  const { getByText } = render(
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>,
  );
  const headerText = getByText(/Header/);
  const bodyText = getByText(/Body/);
  const footerText = getByText(/Footer/);
  expect(headerText).toBeInTheDocument();
  expect(bodyText).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});
