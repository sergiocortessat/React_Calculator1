import { render, screen } from '@testing-library/react';
import Display from '../Components/Display';

test('Should render the Display component', () => {
  render(<Display />);
  const element = screen.getByTestId('display');
  expect(element).toBeInTheDocument();
});
