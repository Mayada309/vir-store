'use client';

import { products } from '../page';
// import Image from 'next/image';
import { Product } from '../types';

function SingleProduct({ id }: { id: number }) {
  const product: Product = products.filter((product) => product.id === id);
  console.log(product);

  return (
    <section>
      <div>
        {/* <Image
          src={product.imageUrl}
          alt={product.name}
          width={560}
          height={730}
          priority
        /> */}
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <p>{product.sizeOptions}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
