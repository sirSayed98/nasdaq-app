import { fireEvent, render, screen } from '@testing-library/react';
import TickerCard from './TickerCard'; // Adjust the path as necessary

describe('TickerCard Component', () => {
  const name = 'Apple Inc.';
  const ticker = 'AAPL';

  it('should render the name and ticker correctly', () => {
    render(<TickerCard name={name} ticker={ticker} id={''} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(ticker)).toBeInTheDocument();
  });

  it('should show the Tooltip with the name when hovered', async () => {
    render(<TickerCard name={name} ticker={ticker} id={''} />);
    const nameElement = screen.getByText(name);
    fireEvent.mouseEnter(nameElement);
    const tooltip = await screen.findByText(name);
    expect(tooltip).toBeInTheDocument();
  });

  it('should truncate the name text with ellipsis if it is too long', () => {
    const longName = 'This is a very long name that will overflow';

    render(<TickerCard name={longName} ticker={ticker} id={''} />);

    const nameElement = screen.getByText(longName);
    expect(nameElement).toHaveStyle('overflow: hidden');
    expect(nameElement).toHaveStyle('textOverflow: ellipsis');
    expect(nameElement).toHaveStyle('whiteSpace: nowrap');
  });

  it('should render the ticker symbol correctly', () => {
    render(<TickerCard name={name} ticker={ticker} id={''} />);
    expect(screen.getByText(ticker)).toBeInTheDocument();
  });
});
