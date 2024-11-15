'use client';

import * as React from 'react';
import { CartItem } from '@/components/cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, RootState } from '../../store';
import CartTotals from '@/components/cart/CartTotals';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function Cart() {
  const dispatch = useDispatch();
  const cartItemsFromStore = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const cartItems = isHydrated ? cartItemsFromStore : [];

  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <h2 className='max-w-7xl mt-8 mx-auto text-3xl text-slate-700 tracking-wide text-center'>
        Your cart is empty!
      </h2>
    );
  }

  return (
    <div className='max-w-[700px] mt-8 flex flex-col mx-auto gap-4 p-4'>
      {cartItems.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
      <button
        className='capitalize px-1 py-2 bg-red-400 rounded text-white'
        onClick={() => dispatch(clearCart())}
      >
        clear cart
      </button>
      <div className='flex justify-between items-center border-t'>
        <CartTotals />
        <Link
          href='checkout'
          className='capitalize bg-slate-700 text-white py-2 sm:px-4 p-2 rounded w-fit sm:text-lg text-xs'
        >
          checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
