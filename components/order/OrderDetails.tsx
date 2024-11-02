'use client';
import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderDetails() {
  const cartFromStore = useSelector((state: RootState) => state.cart);

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const cartItems = isHydrated ? cartFromStore.cartItems : [];
  const shippingFee = isHydrated ? cartFromStore.shippingFee : 0;
  const cartTotal = isHydrated ? cartFromStore.totalPrice : 0;

  return (
    <div className='bg-slate-100 p-4 rounded-xl flex flex-col gap-2 sm:max-w-sm'>
      <div>
        {cartItems.map((item) => {
          return (
            <OrderItem
              key={item.id}
              heading={item.name}
              info={`×${item.amount}`}
            />
          );
        })}
      </div>
      <OrderItem
        heading='subtotal'
        info={cartTotal === 0 ? '--' : String(cartTotal)}
      />
      <OrderItem
        heading='shipping fee'
        info={shippingFee === 0 ? '--' : String(shippingFee)}
      />
      <p className=' flex justify-between items-center text-slate-500 font-bold text-sm  py-1 capitalize'>
        <span>total</span>
        <span>{(cartTotal + shippingFee).toFixed(2)}</span>
      </p>
    </div>
  );
}

export default OrderDetails;
