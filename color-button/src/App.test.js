import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ backgroundColor: 'red' })
});

test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(button);

  expect(button).toHaveStyle({backgroundColor: 'blue'});
  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})
