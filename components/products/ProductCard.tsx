import { Product } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <li
      key={product.id}
      className='flex max-w-96 justify-center text-lg flex-col p-4 rounded-xl items-center gap-2'
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
          className='h-80 w-full object-cover  bg-cover rounded-xl '
        />
        <p className='text-start text-base pt-2 font-bold text-slate-700 '>
          {product.name}
        </p>
        <p className='text-start pt-2 text-base text-slate-500'>
          {product.price}$
        </p>
      </Link>
    </li>
  );
}

export default ProductCard;
