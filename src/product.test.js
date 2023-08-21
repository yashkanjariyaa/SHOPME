import { render, screen } from '@testing-library/react';
import ProductOne from './product-one';
import ProductTwo from './product-two';
import ProductThree from './product-three';

test('renders learn react link', () => {
  render(<ProductOne />);
  render(<ProductTwo />);
  render(<ProductThree/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
