import { render, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';

test('Should render the Calculator components', () => {
  render(<Calculator />);
  const calculator = screen.getByTestId('calculator');
  expect(calculator).toBeInTheDocument();
  const buttonPanel = screen.getByTestId('button-panel');
  expect(buttonPanel).toBeInTheDocument();
});
