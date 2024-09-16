import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Card from '../src/components/Card';

const product = { id: 1, title: 'product1', image: '', price: 1, description: 'product1 description' }

describe('Card component', () => {
    it('renders the Card component', () => {
        const { container } = render(<BrowserRouter><Card product={product} /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    })

    it('renders the products information', () => {
        render(<BrowserRouter><Card product={product} /></BrowserRouter>);

        const img = screen.getByAltText('product1 description');
        expect(img).toBeInTheDocument();

        const title = screen.getByText('product1');
        expect(title).toBeInTheDocument();

        const price = screen.getByText('$1');
        expect(price).toBeInTheDocument();
    })

    it('renders the products form', () => {
        render(<BrowserRouter><Card product={product} /></BrowserRouter>);

        const form = screen.getByRole('form', { name: 'Add to cart' });
        expect(form).toBeInTheDocument();

        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();

        const button = screen.getByRole('button', { name: 'Add to Cart' })
        expect(button).toBeInTheDocument();
    })

    it('increments the inputs counter', async () => {
        const user = userEvent.setup();

        render(<BrowserRouter><Card product={product} /></BrowserRouter>);

        const input = screen.getByRole('spinbutton');
        await user.type(input, '1');

        expect(input.value).toBe('1');
    })

    it('prevents the inputs value from going below 0', async () => {
        const user = userEvent.setup();

        render(<BrowserRouter><Card product={product} /></BrowserRouter>);

        const input = screen.getByRole('spinbutton');
        await user.type(input, '-1');

        expect(input.value).toBe('1');
    })

    it('calls addToCart when button is clicked', async () => {
        const user = userEvent.setup();
        const addToCart = vi.fn();

        render(<BrowserRouter><Card product={product} /></BrowserRouter>);

        const button = screen.getByRole('button', { name: 'Add to Cart' })
        const form = screen.getByRole('form', { name: 'Add to cart' });
        form.onsubmit = addToCart;

        await user.click(button);

        expect(addToCart).toBeCalledTimes(1);
    })
})