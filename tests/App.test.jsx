import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

describe('App component', () => {
    it('renders the root page', () => {
        const { container } = render(<BrowserRouter><App /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })

    it('renders the NavBar', () => {
        render(<BrowserRouter><App /></BrowserRouter>);

        expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '/shop');
        expect(screen.getByAltText('Shopping Cart').parentNode).toHaveAttribute('href', '/checkout')
    })

    it('renders the Home page first', () => {
        render(<BrowserRouter><App /></BrowserRouter>);

        expect(screen.getByAltText('Store')).toBeInTheDocument();
        expect(screen.getByRole('article')).toBeInTheDocument();
    })
})