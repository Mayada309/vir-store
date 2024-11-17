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
// import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const adminLogin = async (formData: FormData) => {
    const rawData = Object.fromEntries(formData.entries());
    try {
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
        router.push('/admin');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.status === 401) {
          toast.error('Wrong password!');
        }
        console.log(error.response?.data);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  };

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
            <div className='grid items-center gap-4'>
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
