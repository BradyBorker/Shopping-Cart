import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkout from '../src/components/Checkout';
import userEvent from '@testing-library/user-event';

const cart = { '0': { product: { id: 0, image: '', title: 'product1', price: 1 }, count: 1 } }

describe('Checkout component', () => {
    it('renders the Checkout component', () => {
        const { container } = render(<Checkout cart={{}} setCart={() => null} />)
        expect(container).toMatchSnapshot();
    })

    it('renders when cart is empty', () => {
        render(<Checkout cart={{}} setCart={() => null} />)

        const heading = screen.getByRole('heading', { name: 'Shopping Cart' });
        expect(heading).toBeInTheDocument();

        const main = screen.getByRole('main');
        expect(main.childElementCount).toBe(1);

        const emptyMessage = screen.getByText('Cart is Empty!');
        expect(emptyMessage).toBeInTheDocument();
    })

    it('renders when products are in the cart', () => {
        render(<Checkout cart={cart} setCart={() => null} />)

        const main = screen.getByRole('main');
        expect(main.childElementCount).toBe(2);

        const totalCost = screen.getByText(/Total Cost: \$\d+\.?\d*/i);
        expect(totalCost).toBeInTheDocument();
    })

    it('calls removeProduct when the remove button is clicked', async () => {
        const user = userEvent.setup();
        const setCart = vi.fn(() => {
            cart['0'].count = cart['0'].count - 1
        })

        render(<Checkout cart={cart} setCart={setCart} />);

        const button = screen.getByRole('button', { name: 'Remove' });
        await user.click(button)

        expect(setCart).toBeCalledTimes(1);
    })
})