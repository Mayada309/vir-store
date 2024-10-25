'use client';

import * as React from 'react';
import { CartItem } from '@/components/cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, RootState } from '../store';
import CartTotals from '@/components/cart/CartTotals';

function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const isEmpty = cartItems.length;

  if (isEmpty === 0) {
    return (
      <h2 className='max-w-7xl mt-8 mx-auto text-3xl text-slate-700 tracking-wide text-center'>
        Your cart is empty!
      </h2>
    );
  }

  return (
    <div className='max-w-[700px] mt-8 flex flex-col mx-auto gap-4'>
      {cartItems.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
      <button
        className='capitalize px-1 py-2 bg-red-400 rounded text-white'
        onClick={() => dispatch(clearCart())}
      >
        clear cart
      </button>
      <CartTotals />
    </div>
  );
}

export default Cart;
