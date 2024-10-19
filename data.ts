import { Product } from './app/types';
import image1 from './images/landing-1.jpg';
import image2 from './images/landing-2.jpg';
import image3 from './images/landing-3.jpg';

export const products: Product[] = [
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
