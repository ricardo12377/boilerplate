import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { PageTitle } from '.';

describe('render', () => {
  it('it should render div', () => {
    render(<PageTitle title='Hi' />);

    const title = screen.getByText(/hi/i);

    expect(title).toBeInTheDocument();
  });
});
