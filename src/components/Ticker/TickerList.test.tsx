import { render, screen } from '@testing-library/react';
import { vi } from 'vitest'; // Mocking library
import TickerList from './TickerList';

// Mock child components
vi.mock('./TickerCard', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked TickerCard</div>),
}));

vi.mock('./NoResultFound', () => ({
  __esModule: true,
  default: vi.fn(() => <div>No results found</div>),
}));

describe('TickerList Component', () => {
  const mockTickerList = [
    { id: '1', name: 'Apple', ticker: 'AAPL' },
    { id: '2', name: 'Microsoft', ticker: 'MSFT' },
  ];

  it('should render TickerCard components for each item in tickerList', () => {
    render(<TickerList tickerList={mockTickerList} isLoadingMore={false} searchText="" />);
    expect(screen.getAllByText('Mocked TickerCard').length).toBe(mockTickerList.length);
  });

  it('should show loading spinner when isLoadingMore is true', () => {
    render(<TickerList tickerList={mockTickerList} isLoadingMore={true} searchText="" />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render NoResultFound component when tickerList is empty', () => {
    render(<TickerList tickerList={[]} isLoadingMore={false} searchText="Apple" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('should render NoResultFound component with isSearchResults as true when searchText is provided and tickerList is empty', () => {
    render(<TickerList tickerList={[]} isLoadingMore={false} searchText="Apple" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('should not render NoResultFound component when tickerList is not empty', () => {
    render(<TickerList tickerList={mockTickerList} isLoadingMore={false} searchText="Apple" />);
    expect(screen.queryByText('No results found')).toBeNull();
  });

  it('should render correct number of Grid components', () => {
    render(<TickerList tickerList={mockTickerList} isLoadingMore={false} searchText="" />);
    expect(screen.getAllByText('Mocked TickerCard').length).toBe(mockTickerList.length);
  });
});
