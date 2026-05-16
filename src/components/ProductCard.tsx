'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden flex flex-col h-full" padding="none">
      <div className="relative aspect-4/5 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="( max-width: 640px ) 100vw, ( max-width: 1024px ) 50vw, 33vw"
        />
        
        <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Button 
            variant="dark"
            size="sm"
            onClick={() => addToCart(product)}
            className="rounded-full w-12 h-12 p-0 shadow-xl"
            title="Добавить в корзину"
          >
            <ShoppingCart size={20} />
          </Button>
          <Link href={`/products/${product.id}`}>
            <Button 
              variant="primary"
              size="sm"
              className="rounded-full w-12 h-12 p-0 shadow-xl"
              title="Просмотреть"
            >
              <Eye size={20} />
            </Button>
          </Link>
        </div>
        
        {product.price > 12000 && (
          <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter z-10 shadow-lg italic">
            PREMIUM DROP
          </span>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] text-zinc-400 font-black uppercase tracking-widest italic">
            {product.category}
          </span>
          <span className="text-lg font-black text-zinc-900 leading-none">
            {product.price.toLocaleString('ru-RU')} СОМ
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-zinc-900 mb-6 group-hover:text-orange-600 transition-colors uppercase tracking-tight leading-none italic">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <Button 
            variant="outline" 
            className="w-full text-xs py-2 tracking-widest"
            onClick={() => addToCart(product)}
          >
            В КОРЗИНУ
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
