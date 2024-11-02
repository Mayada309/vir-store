'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '../ui/label';
import { cities } from '@/data';
import FromInput from './FromInput';
import { useDispatch } from 'react-redux';
import { getShippingFee } from '@/app/store';

function CheckoutForm() {
  const dispatch = useDispatch();
  return (
    <form className='flex flex-col gap-8 pt-4 sm:max-w-sm sm:mb-8 '>
      <h2 className='text-lg capitalize mt-2 font-bold text-slate-700'>
        shipping information
      </h2>
      {/* name */}
      <FromInput type='text' id='name' name='name' placeholder='Name' />

      {/* email */}
      <FromInput
        type='email'
        id='email'
        name='email'
        placeholder='example@ex.com'
      />

      {/* number */}
      <FromInput
        type='text'
        id='number'
        name='number'
        placeholder='0123456789'
      />

      {/* city */}
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='city' className='text-slate-700'>
          City
        </Label>
        <Select
          onValueChange={(cityId) =>
            dispatch(
              getShippingFee(
                cities.filter((i) => i.id === Number(cityId))[0].shippingFee
              )
            )
          }
        >
          <SelectTrigger
            id='city'
            name='city'
            className='sm:max-w-sm rounded border-slate-300 text-slate-600'
          >
            <SelectValue placeholder='City' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {cities.map((city) => {
                return (
                  <SelectItem
                    className='bg-white focus:bg-slate-100 '
                    key={city.id}
                    value={String(city.id)}
                  >
                    {city.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* address */}
      <FromInput
        type='text'
        id='address'
        name='address'
        placeholder='Str no. building apartment..'
      />

      <FromInput
        type='text'
        id='paymentMethod'
        name='payment method'
        placeholder='cash on delivery'
        disabled={true}
      />

      <button className='bg-orange-400 capitalize text-white rounded py-2 px-4 '>
        place order
      </button>
    </form>
  );
}

export default CheckoutForm;
