import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Search from './Search'; // Adjust the path as necessary
describe('Search Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let searchMock: any;

  beforeEach(() => {
     searchMock = vi.fn();  
  });

  it('should render correctly and set the placeholder text when isDisabled is false', () => {
    render(<Search search={searchMock} isDisabled={false} />);

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
    expect(input).not.toBeDisabled(); 
  });

  it('should set the placeholder text and disable the input when isDisabled is true', () => {
    render(<Search search={searchMock} isDisabled={true} />);

    const input = screen.getByPlaceholderText('Try again after 1 min');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();  
  });

  it('should call search function with the correct input value after debounce delay', async () => {
    render(<Search search={searchMock} isDisabled={false} />);

    const input = screen.getByPlaceholderText('Search...');

    // Simulate user typing into the input field
    fireEvent.change(input, { target: { value: 'AAPL' } });

   
    await waitFor(() => {
      expect(searchMock).toHaveBeenCalledWith('AAPL');
    });
    expect(searchMock).toHaveBeenCalledTimes(1);
  });

  it('should not call search function when input is disabled', async () => {
    render(<Search search={searchMock} isDisabled={true} />);

    const input = screen.getByPlaceholderText('Try again after 1 min');

    fireEvent.change(input, { target: { value: 'AAPL' } });
  
    await waitFor(() => {
      expect(searchMock).not.toHaveBeenCalled();
    });
  });
});
