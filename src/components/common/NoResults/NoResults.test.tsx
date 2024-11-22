// src/components/NoResultFound.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NoResult from './NoResults';

describe('NoResultFound Component', () => {
  it('should render "No results found" when isSearchResults is true', () => {
    render(<NoResult isSearchResults={true} />);

   
    const noResultsText = screen.getByText('No results found');
    expect(noResultsText).toBeInTheDocument();
  });
 
});
