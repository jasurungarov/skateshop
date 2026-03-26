'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from './layout/Container';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 text-white py-20 lg:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ 
            opacity: [0.3, 0.4, 0.3],
            scale: [1.05, 1.08, 1.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full h-full"
        >
          <Image 
            src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000" 
            alt="Skating background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block py-1.5 px-4 rounded-full bg-orange-600 text-white text-[10px] font-black tracking-[0.3em] uppercase">
                LIMITLESS COLLECTION 2026
              </span>
              <div className="h-px w-20 bg-orange-600/50 hidden md:block" />
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 italic uppercase select-none">
              SKATE <br />
              <span className="text-orange-600 border-t-2 border-b-2 border-white/20 px-2 inline-block py-2">SHOP</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-12">
                <p className="text-xl text-zinc-400 max-w-sm leading-relaxed font-medium">
                  Премиальное оборудование для тех, кто не видит границ. Мы создаем технику, которая чувствует каждое твое движение.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                    <Link href="/catalog">
                      <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                        В КАТАЛОГ
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Elements for Atmosphere */}
      <div className="absolute bottom-20 right-20 hidden lg:flex flex-col gap-8">
        <div className="flex flex-col items-end">
            <span 
              className="text-6xl font-black text-white/10 tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
            >
              EST. 2026
            </span>
            <span className="text-orange-600 font-bold tracking-[0.5em] text-xs"> BISHKEK / KRGYZYSTAN</span>
        </div>
        <div className="flex gap-4 self-end">
            <div className="w-12 h-0.5 bg-white/20" />
            <div className="w-6 h-0.5 bg-orange-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
