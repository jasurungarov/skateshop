'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <PageWrapper>
        <Section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <Container>
            <div className="w-32 h-32 bg-zinc-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-zinc-100 shadow-sm transition-transform hover:rotate-6">
              <ShoppingBag size={48} className="text-zinc-200" />
            </div>
            <h2 className="text-5xl font-black text-zinc-900 tracking-tighter mb-6 uppercase italic">КОРЗИНА ПУСТА</h2>
            <p className="text-zinc-400 mb-12 max-w-sm text-lg font-medium mx-auto">
              Похоже, вы еще ничего не выбрали. <br /> Начните свое путешествие в нашем каталоге.
            </p>
            <Link href="/catalog">
              <Button size="lg" className="gap-3 uppercase italic tracking-widest shadow-xl shadow-orange-600/20">
                ПЕРЕЙТИ В КАТАЛОГ
                <ArrowRight size={20} />
              </Button>
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Section padding="md">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block italic">ОФОРМЛЕНИЕ ЗАКАЗА</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.85] uppercase italic">
                ВАША <br /> <span className="text-orange-600 underline decoration-zinc-100 underline-offset-8">КОРЗИНА</span>
              </h1>
            </div>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs border-b-2 border-zinc-100 pb-2 italic">
              В КОРЗИНЕ {totalItems} ТОВАРОВ
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-20">
            {/* Items List */}
            <div className="xl:col-span-2 flex flex-col">
              <div className="hidden md:grid grid-cols-6 mb-8 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 italic">
                  <div className="col-span-3">Товар</div>
                  <div className="col-span-1 text-center">Кол-во</div>
                  <div className="col-span-1 text-right pr-4">Цена</div>
                  <div className="col-span-1"></div>
              </div>

              <div className="flex flex-col gap-6">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <Card className="flex flex-col md:grid md:grid-cols-6 items-center gap-8 group" padding="sm">
                        <div className="md:col-span-3 flex items-center gap-8 w-full">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-zinc-100 rounded-4xl overflow-hidden shrink-0 relative">
                               <Image
                                 src={item.images[0]}
                                 alt={item.name}
                                 fill
                                 className="object-cover group-hover:scale-110 transition-transform duration-500"
                               />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-1 italic">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-orange-600 transition-colors uppercase italic truncate max-w-37.5 sm:max-w-none">
                                    {item.name}
                                </h3>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="flex items-center gap-1.5 text-zinc-300 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-widest mt-4 italic"
                                >
                                    <Trash2 size={12} />
                                    Удалить
                                </button>
                            </div>
                        </div>
                        
                        <div className="md:col-span-1 flex justify-center w-full">
                            <div className="flex items-center bg-zinc-50 rounded-2xl p-1 border border-zinc-100">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all text-zinc-900 font-bold"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-10 text-center font-black text-sm italic">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all text-zinc-900 font-bold"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                        </div>

                        <div className="md:col-span-1 flex flex-col items-end w-full">
                          <span className="text-2xl font-black text-zinc-900 italic">
                            {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-[10px] text-zinc-400 font-black uppercase tracking-tighter italic">
                            {item.price.toLocaleString('ru-RU')} ₽ / шт.
                          </span>
                        </div>

                        <div className="md:col-span-1 hidden md:flex justify-end pr-4">
                            <div className="w-2 h-2 rounded-full bg-orange-600 group-hover:animate-ping" />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Summary */}
            <div className="xl:col-span-1">
              <div className="bg-zinc-950 p-10 rounded-[3rem] text-white sticky top-32 shadow-2xl shadow-zinc-950/20 border border-white/5">
                <h3 className="text-2xl font-black tracking-tighter mb-10 uppercase italic">ИТОГОВАЯ СУММА</h3>
                
                <div className="flex flex-col gap-6 mb-12">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="text-sm font-bold uppercase tracking-widest italic">ТОВАРЫ ({totalItems})</span>
                    <span className="font-bold">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="text-sm font-bold uppercase tracking-widest italic">ДОСТАВКА</span>
                    <span className="text-orange-600 font-black text-xs tracking-widest uppercase italic">FREE EXPRESS</span>
                  </div>
                  <div className="h-px w-full bg-zinc-800" />
                </div>
                
                <div className="mb-12">
                  <span className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2 block italic">К ОПЛАТЕ</span>
                  <span className="text-6xl font-black text-white tracking-tighter italic">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full gap-3 uppercase italic tracking-widest">
                      ОФОРМИТЬ ЗАКАЗ
                      <ArrowRight size={20} />
                  </Button>
                  <Link 
                      href="/catalog" 
                      className="w-full py-2 text-center text-[10px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-[0.3em] block italic"
                  >
                      ВЕРНУТЬСЯ В МАГАЗИН
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default CartPage;
