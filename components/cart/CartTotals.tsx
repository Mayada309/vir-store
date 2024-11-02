import { RootState } from '@/app/store';
import React from 'react';
import { useSelector } from 'react-redux';

function CartTotals() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice); // Access totalPrice correctly

  return (
    <div className='mt-4 p-4'>
      <h2 className='sm:text-lg font-bold text-xs'>
        Total Price: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
}
export default CartTotals;
