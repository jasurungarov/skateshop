'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Check, Shield, Truck, Package, Star } from 'lucide-react';
import Link from 'next/link';

const ProductDetailPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
        <Link href="/catalog" className="text-orange-600 font-bold hover:underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-12 transition-colors group text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Назад в каталог
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Images Section */}
          <div className="flex flex-col gap-6 sticky top-32">
            <div className="aspect-square bg-zinc-50 rounded-[4rem] overflow-hidden relative border border-zinc-100 shadow-sm">
               <Image
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
               />
              
              {product.price > 12000 && (
                <span className="absolute top-10 left-10 bg-zinc-950 text-white text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-[0.3em] z-10">
                  Premium Edition
                </span>
              )}

              <div className="absolute bottom-10 right-10 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-orange-600 text-orange-600" />
                ))}
                <span className="text-[10px] font-bold text-zinc-900 ml-2">5.0 (24 ОТЗЫВА)</span>
              </div>
            </div>

            <div className="flex gap-4 px-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-24 h-24 rounded-3xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-orange-600 ring-4 ring-orange-50' : 'border-zinc-100 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col pt-4">
            <div className="mb-10">
              <span className="px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] mb-6 inline-block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-8 leading-[0.9]">
                {product.name}
              </h1>
              
              <div className="flex items-end gap-6 mb-10">
                <span className="text-5xl font-black text-zinc-900 leading-none">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                <span className="text-zinc-300 text-xl font-medium line-through decoration-orange-600/30">
                  {(product.price * 1.25).toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <p className="text-zinc-500 text-xl leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <div className="bg-zinc-50 p-8 rounded-[3rem]">
                <h4 className="font-black text-zinc-900 mb-6 uppercase tracking-widest text-xs border-b border-zinc-200 pb-4">
                  Технические характеристики:
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-zinc-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-2 flex items-center justify-center gap-4 py-6 rounded-[2.5rem] font-black tracking-widest text-sm transition-all ${
                    isAdded 
                      ? 'bg-green-600 text-white shadow-xl shadow-green-600/20' 
                      : 'bg-zinc-950 text-white hover:bg-orange-600 shadow-2xl shadow-zinc-900/10'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={20} strokeWidth={3} />
                      ДОБАВЛЕНО В КОРЗИНУ
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} strokeWidth={3} />
                      ДОБАВИТЬ В КОРЗИНУ
                    </>
                  )}
                </motion.button>
                <button className="flex-1 py-6 border-2 border-zinc-900 rounded-[2.5rem] font-black tracking-widest text-sm hover:bg-zinc-900 hover:text-white transition-all">
                  КУПИТЬ В 1 КЛИК
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-orange-600">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] text-zinc-900 uppercase">Доставка 1-3 дня</h5>
                    <p className="text-[10px] text-zinc-400 uppercase">Бесплатно по РФ</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-orange-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] text-zinc-900 uppercase">Гарантия 1 год</h5>
                    <p className="text-[10px] text-zinc-400 uppercase">На все детали</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-orange-600">
                    <Package size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] text-zinc-900 uppercase">Возврат 14 дней</h5>
                    <p className="text-[10px] text-zinc-400 uppercase">Без лишних вопросов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
