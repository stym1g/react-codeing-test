import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const countElement = getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments and decrements count correctly', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText(/Increment/i);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('count does not go below 0 when decrementing from 0', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });
});
