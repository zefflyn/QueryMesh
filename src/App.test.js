// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QueryMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QueryMesh/i);
    expect(titleElement).toBeInTheDocument();
});
