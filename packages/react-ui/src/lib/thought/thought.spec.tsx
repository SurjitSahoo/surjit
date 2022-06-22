import { render } from '@testing-library/react';

import Thought from './thought';

describe('Thought', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Thought />);
    expect(baseElement).toBeTruthy();
  });
});
