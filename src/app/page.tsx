'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: <Zap className="text-orange-600" size={32} />,
      title: 'Быстрая доставка',
      desc: 'Доставляем по всей области в кратчайшие сроки.'
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={32} />,
      title: 'Гарантия качества',
      desc: 'Только оригинальные бренды и проверенные комплектующие.'
    },
    {
      icon: <Star className="text-orange-600" size={32} />,
      title: 'Премиум сервис',
      desc: 'Помогаем с выбором и настройкой вашего первого скейта.'
    }
  ];

  return (
    <PageWrapper pt-0>
      <Hero />
      
      {/* Featured Products */}
      <Section id="featured">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-zinc-900 leading-[0.9]">
                ПОПУЛЯРНЫЕ <br />
                <span className="text-orange-600">ТОВАРЫ</span>
              </h2>
              <p className="text-zinc-500 text-xl font-medium">
                Наши самые востребованные модели, которые выбирают профессионалы и любители по всему миру.
              </p>
            </div>
            <Link href="/catalog">
              <Button variant="outline" className="group">
                СМОТРЕТЬ ВСЕ
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="flex flex-col items-center border border-orange-600 text-center gap-6" padding="lg">
                <div className="p-5 bg-orange-50 rounded-3xl text-orange-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section>
        <Container>
          <div className="bg-zinc-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px]" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 italic leading-none">
                ПРИСОЕДИНЯЙСЯ <br />
                <span className="text-orange-600 text-glow">К КОМАНДЕ</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                Подпишись на нашу рассылку и получи скидку 10% на первую покупку, а также доступ к эксклюзивным дропам.
              </p>
              
              <form className="w-full flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 bg-zinc-900 border-2 border-zinc-800 focus:border-orange-600 focus:outline-none rounded-full px-8 py-4 text-white font-medium transition-all"
                  required
                />
                <Button type="submit" variant="primary" size="lg">
                  ПОДПИСАТЬСЯ
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
