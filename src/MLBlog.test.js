import React from 'react';
import { render } from '@testing-library/react';
import MLBlog from './MLBlog';

test('renders learn react link', () => {
  const { getByText } = render(<MLBlog />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
