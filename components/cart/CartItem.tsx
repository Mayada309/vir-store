'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
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

export function CartItem({ product }: { product: Product }) {
  const dispatch = useDispatch();

  // Debugging: Log the product to ensure its structure is as expected
  console.log('Product:', product);

  return (
    <Card className='w-full flex items-center justify-between flex-wrap'>
      <CardHeader>
        <Image
          className='w-28 h-28 rounded-xl object-cover'
          src={product.imageUrl}
          alt={product.name}
        />
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <CardTitle>{product.name}</CardTitle>
        <div className='flex w-full items-center justify-between gap-4'>
          <p className='capitalize'>
            size <span>{product.selectedSize}</span>
          </p>

          <div className='flex items-center justify-center gap-4'>
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
      <CardFooter className='flex justify-between'>
        <Button
          onClick={() => dispatch(removeFromCart(product))}
          variant='outline'
          className='capitalize'
        >
          remove
        </Button>
      </CardFooter>
    </Card>
  );
}
