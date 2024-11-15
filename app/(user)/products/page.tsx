import ProductsList from '@/components/products/ProductsList';
import { products } from '@/data';

function Products() {
  return (
    <>
      <ProductsList products={products} />
    </>
  );
}

export default Products;
