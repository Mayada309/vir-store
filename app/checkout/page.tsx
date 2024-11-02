import CheckoutForm from '@/components/form/CheckoutForm';
import Container from '@/components/global/Container';
import OrderDetails from '@/components/order/OrderDetails';
import React from 'react';

function Checkout() {
  return (
    <Container className='mt-8'>
      <h1 className='text-2xl capitalize border-b py-4 font-bold text-slate-700'>
        place your order
      </h1>
      <div className='grid sm:items-start sm:grid-cols-2 sm:justify-start items-stretch justify-stretch gap-8 '>
        <div className=''>
          <CheckoutForm />
        </div>
        <div className='sm:mt-8 mb-8'>
          <OrderDetails />
        </div>
      </div>
    </Container>
  );
}

export default Checkout;
