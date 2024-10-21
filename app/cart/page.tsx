'use client';
import { useState, useEffect } from 'react';

function Cart() {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      if (cart !== null) {
        setIsEmpty(false);
      }
    }
  }, []);

  if (isEmpty) {
    return (
      <h2 className='max-w-7xl mx-auto text-3xl text-slate-700 tracking-wide text-center'>
        Your cart is empty!
      </h2>
    );
  }

  return <div>Cart</div>;
}

export default Cart;
