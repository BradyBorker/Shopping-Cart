import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Shop from '../src/components/Shop';

window.fetch = vi.fn(() => {
    const products = [
        { id: 1, title: 'product1', image: '', price: 1, description: '' },
        { id: 2, title: 'product2', image: '', price: 2, description: '' },
    ]

    return Promise.resolve({
        json: () => Promise.resolve(products),
    });
})

describe('Shop component', () => {
    it('renders the Shop page', () => {
        const { container } = render(<BrowserRouter><Shop /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })

    it('renders the main element', () => {
        render(<BrowserRouter><Shop /></BrowserRouter>);
        expect(screen.getByRole('main')).toBeInTheDocument();
    })

    it('renders two products', () => {
        render(<BrowserRouter><Shop /></BrowserRouter>);
        const main = screen.getByRole('main');
        expect(main.childElementCount).toBe(2);
    })
})