import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders First Name', () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
});

test('renders Last Name', () => {
  const { getByText } = render(<App />);
  const LastName = getByText(/last name/i);
  expect(LastName).toBeInTheDocument();
});

test('renders Email', () => {
  const { getByText } = render(<App />);
  const email = getByText(/email/i);
  expect(email).toBeInTheDocument();
});

test('renders Message', () => {
  const { getByText } = render(<App />);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
});
