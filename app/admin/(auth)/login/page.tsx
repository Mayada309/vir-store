'use client';
import * as React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Logo from '@/components/navbar/Logo';

import axios from 'axios';
import { redirect } from 'next/navigation';

const adminLogin = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData.entries());
  const response = await axios.post(
    'http://kiiva.localhost:8000/api/login',
    rawData,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
  if (response.status === 200) {
    redirect('/admin');
  }
};

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-36'>
      <Logo />
      <Card className='sm:w-[450px] w-[300px]'>
        <CardHeader>
          <CardTitle className='text-center text-2xl capitalize text-slate-700 font-bold'>
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={adminLogin}>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Input
                  id='email'
                  placeholder='Email'
                  type='email'
                  name='email'
                  required
                  className='rounded text-slate-600'
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Input
                  id='password'
                  placeholder='Password'
                  type='password'
                  name='password'
                  required
                  className='rounded text-slate-600'
                />
              </div>
              <button
                type='submit'
                className='mt-4 bg-slate-700 text-white rounded py-2 hover:bg-orange-400 transition-colors'
              >
                Login
              </button>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center items-center'></CardFooter>
      </Card>
    </div>
  );
};

export default Login;
