'use client';

import Image from 'next/image';
import image1 from '../images/landing-1.jpg';
import image2 from '../images/landing-2.jpg';
import image3 from '../images/landing-3.jpg';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic White T-Shirt",
    price: 19.99,
    description:
      'A timeless classic white t-shirt made from 100% cotton. Soft, comfortable, and perfect for any casual outfit.',
    imageUrl: image1,
    category: 'Clothing',
    sizeOptions: ['S', 'M', 'L', 'XL'],
    color: 'White',
    stock: 50,
  },
  {
    id: 2,
    name: "Women's Graphic Tee",
    price: 24.99,
    description:
      'Stylish women’s graphic t-shirt featuring a trendy design. Made with a blend of cotton and polyester for maximum comfort.',
    imageUrl: image2,
    category: 'Clothing',
    sizeOptions: ['XS', 'S', 'M', 'L'],
    color: 'Black',
    stock: 30,
  },
  {
    id: 3,
    name: 'Unisex Vintage Washed T-Shirt',
    price: 29.99,
    description:
      'Unisex vintage washed t-shirt with a relaxed fit. Available in multiple colors and perfect for a laid-back look.',
    imageUrl: image3,
    category: 'Clothing',
    sizeOptions: ['M', 'L', 'XL', 'XXL'],
    color: 'Gray',
    stock: 40,
  },
];

const images = [image1, image2, image3];

function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className='relative mb-4 h-full md:flex md:flex-col md:items-center md:justify-center'>
        <div className='absolute bg-slate-500/35 h-full w-full z-10 flex justify-center items-center md:h-24'>
          <p className='uppercase font-semibold opacity-100 p-4 text-2xl text-center text-white'>
            Welcome to Kiiva
            <br />
            your one-stop shop for stylish high-quality t-shirts!
          </p>
        </div>
        <div className='md:w-[50vw] md:h-[50vh] z-0 '>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem className='mx-auto' key={index}>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={image}
                      alt='landing-image '
                      width={250}
                      height={150}
                      className=''
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className='mt-4 pt-4 text-2xl'>
        <h2 className='capitalize text-slate-700 font-bold'>
          featured products
        </h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {products.map((product) => {
            return (
              <li
                key={product.id}
                className='flex flex-col p-4 rounded-xl items-center gap-2'
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={75}
                  className='h-45 bg-cover'
                />
                <p>{product.name}</p>
                <p>{product.price}$</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
