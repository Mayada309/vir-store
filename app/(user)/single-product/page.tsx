'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/data';
import Image from 'next/image';
import { Product } from '../../types';
import Container from '@/components/global/Container';
import { Suspense } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addToCart } from '../../store';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { toast } from 'react-toastify';

function SingleProduct() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const data: Product[] = products.filter(
    (product) => product.id === Number(id)
  );
  const product: Product = data[0];
  console.log(product);

  const handleAddToCart = (formData: FormData) => {
    const rawData = Object.fromEntries(formData.entries());
    const newProduct = {
      ...product,
      amount: Number(rawData.amount),
      selectedSize: String(rawData.size),
    };
    if (newProduct.amount !== 0 && newProduct.selectedSize !== 'undefined') {
      dispatch(addToCart(newProduct));
      toast.success('Added to cart!');
    } else {
      toast.error('Please select an amount and a size!');
      return;
    }
  };

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
          <form action={handleAddToCart}>
            <div className='flex gap-4 justify-start items-center mb-4'>
              Available sizes:
              {product.sizeOptions.map((size, index) => {
                return (
                  <p key={index} className='flex gap-1'>
                    <input type='radio' name='size' value={size} id='size' />
                    <span>{size}</span>
                  </p>
                );
              })}
            </div>
            <div>
              <Select name='amount'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select an Amount' />
                </SelectTrigger>
                <SelectContent className='bg-white'>
                  <SelectGroup>
                    <SelectLabel>Amount</SelectLabel>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <button
              type='submit'
              className=' bg-slate-500 mt-2 text-white w-full hover:bg-orange-400/85 py-2 px-4 rounded capitalize mb-8 transition-colors'
            >
              add to cart
            </button>
          </form>
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
