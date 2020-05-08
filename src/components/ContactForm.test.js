import React from 'react';
import ContactForm from './ContactForm';
import { render, fireEvent, getByTestId } from '@testing-library/react';

test('test to render', () => {
  render(<ContactForm />);
});

test('contact form will submit', () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByLabelText(/Email/i);
  fireEvent.change(firstNameInput, {
    target: { value: 'Tiffany' },
  });
  expect(firstNameInput.value).toBe('Tiffany');

  fireEvent.change(lastNameInput, {
    target: { value: 'Crosby' },
  });
  expect(lastNameInput.value).toBe('Crosby');

  fireEvent.change(emailInput, {
    target: { value: 'tiffanycrosby@nothing.com' },
  });
  expect(emailInput.value).toBe('tiffanycrosby@nothing.com');

  const submitBtn = getByTestId('submit');
  fireEvent.click(submitBtn);
});
