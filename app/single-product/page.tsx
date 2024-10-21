'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/data';
import Image from 'next/image';
import { Product } from '../types';
import Container from '@/components/global/Container';
import { Suspense } from 'react';

function SingleProduct() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const data: Product[] = products.filter(
    (product) => product.id === Number(id)
  );
  const product: Product = data[0];

  return (
    <section className='mt-12'>
      <Container className='flex gap-8 flex-col justify-center items-center sm:flex-row sm:items-start '>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={560}
          height={730}
          priority
          className='h-96 w-fit'
        />
        <div className='h-full text-slate-700 flex flex-col gap-2 '>
          <h1 className='text-3xl font-bold '>{product.name}</h1>
          <h2>{product.price}$</h2>
          <p className='max-w-96'>{product.description}</p>
          <div className='flex gap-4 justify-start items-center mb-4'>
            Available sizes:
            {product.sizeOptions.map((size, index) => {
              return (
                <p key={index} className='flex gap-1'>
                  <input type='radio' name='size' className='' id='size' />
                  <span>{size}</span>
                </p>
              );
            })}
          </div>
          <button className=' bg-slate-500 text-white hover:bg-orange-400/85 py-2 px-4 rounded capitalize mb-8 transition-colors'>
            add to cart
          </button>
        </div>
      </Container>
    </section>
  );
}

export default function SingleProductPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleProduct />
    </Suspense>
  );
}
