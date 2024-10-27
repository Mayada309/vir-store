import { StaticImageData } from 'next/image';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: StaticImageData;
  category: string;
  sizeOptions: string[];
  color: string;
  stock: number;
  amount: number;
  selectedSize: string;
  featured: boolean;
};

export type NavLink = {
  id: number;
  page: string;
  url: string;
};
