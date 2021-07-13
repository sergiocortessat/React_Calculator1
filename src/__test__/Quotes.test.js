import { render, screen } from '@testing-library/react';
import Quotes from '../Components/Quotes';

test('Should render the Quotes component', () => {
  render(<Quotes />);
  const element = screen.getByTestId('quote');
  expect(element).toBeInTheDocument();
});
