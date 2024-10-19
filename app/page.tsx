'use client';
import logo from '../images/kiiva.png';
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
import Link from 'next/link';
import { products } from '@/data';

const images = [image1, image2, image3];

function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className='relative mb-4 h-full md:flex md:flex-col md:items-center md:justify-center'>
        <div className='absolute bg-slate-500/35 h-full w-full p-4 z-10 flex justify-center items-center md:h-[35%]'>
          <p className='uppercase font-semibold opacity-100 p-4 text-2xl text-center text-white '>
            Welcome to
            <Image
              height={100}
              width={100}
              className='ml-2 w-16 h-16 inline'
              src={logo}
              alt='kiiva'
            />
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
                      width={560}
                      height={730}
                      className='h-80 w-full object-cover'
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
                className='flex justify-center text-lg flex-col p-4 rounded-xl items-center gap-2'
              >
                <Link href={{ pathname: '/single-product', query: { id: product.id } }}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                    className='h-80 w-full object-cover bg-cover'
                  />
                  <p className='text-center'>{product.name}</p>
                  <p className='text-center'>{product.price}$</p>
                  
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
