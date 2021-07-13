import { render, screen } from '@testing-library/react';
import HomeMessage from '../Components/HomeMessage';

test('Should render the Home Message component', () => {
  render(<HomeMessage />);
  const element = screen.getByTestId('home-messages');
  expect(element).toBeInTheDocument();
});
