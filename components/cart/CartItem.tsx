'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product } from '@/app/types';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '@/app/store';
import { MdCancel } from 'react-icons/md';

export function CartItem({ product }: { product: Product }) {
  const dispatch = useDispatch();

  // Debugging: Log the product to ensure its structure is as expected
  console.log('Product:', product);

  return (
    <Card className=' flex items-center relative sm:justify-start '>
      <CardHeader>
        <Image
          className='w-28 h-28 rounded-xl object-cover'
          src={product.imageUrl}
          alt={product.name}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className='max-w-56 tracking-wide leading-5'>
          {product.name}
        </CardTitle>
        <div className='flex w-full items-center pt-2 gap-4 '>
          <p className='capitalize'>
            size <span>{product.selectedSize}</span>
          </p>

          <div className='flex items-center gap-2'>
            <Label htmlFor='amount'>Amount</Label>
            <Select
              onValueChange={(newAmount) =>
                dispatch(updateCart({ product, newAmount }))
              }
              name='amount'
            >
              <SelectTrigger id='amount'>
                <SelectValue
                  placeholder={
                    product.amount ? product.amount.toString() : 'Select amount'
                  }
                />
              </SelectTrigger>
              <SelectContent position='popper' className='bg-white'>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
                <SelectItem value='4'>4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className='flex justify-between'> */}
      <button
        onClick={() => dispatch(removeFromCart(product))}
        className='capitalize text-2xl hover:text-orange-400 rounded-full absolute top-4 right-4'
      >
        <MdCancel />
      </button>
      {/* </CardFooter> */}
    </Card>
  );
}
