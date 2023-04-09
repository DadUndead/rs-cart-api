import { UserCart, CartItem } from '../models';

/**
 * @param {UserCart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: UserCart): number {
  return cart ? cart.items.reduce((acc: number, { product: { price }, count }: CartItem) => {
    return acc += price * count;
  }, 0) : 0;
}
