import React from 'react';
import { render } from '@testing-library/react';
import Home from './';

test('renders without crashing', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeDefined();
});
