import Link from 'next/link';
import { products } from '@/data';
import Image from 'next/image';

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className='mt-4 pt-4 text-2xl'>
      <h2 className='capitalize text-slate-700 font-bold'>featured products</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {featuredProducts.map((product) => {
          return (
            <li
              key={product.id}
              className='flex justify-center text-lg flex-col p-4 rounded-xl items-center gap-2'
            >
              <Link
                href={{
                  pathname: '/single-product',
                  query: { id: product.id },
                }}
              >
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
  );
}

export default FeaturedProducts;
