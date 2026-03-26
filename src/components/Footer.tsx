import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './layout/Container';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              SKATE<span className="text-orange-600">SHOP</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Ваш премиальный магазин скейтбордов. Мы предлагаем только лучшее оборудование для райдеров любого уровня.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-600 hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-600 hover:scale-110 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-600 hover:scale-110 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white italic">Навигация</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/catalog" className="text-zinc-400 hover:text-orange-600 transition-colors">Каталог</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-orange-600 transition-colors">О нас</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-orange-600 transition-colors">Контакты</Link></li>
              <li><Link href="/faq" className="text-zinc-400 hover:text-orange-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white italic">Категории</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/catalog?category=Скейтборды" className="text-zinc-400 hover:text-orange-600 transition-colors">Скейтборды</Link></li>
              <li><Link href="/catalog?category=Круизеры" className="text-zinc-400 hover:text-orange-600 transition-colors">Круизеры</Link></li>
              <li><Link href="/catalog?category=Лонгборды" className="text-zinc-400 hover:text-orange-600 transition-colors">Лонгборды</Link></li>
              <li><Link href="/catalog?category=Аксессуары" className="text-zinc-400 hover:text-orange-600 transition-colors">Аксессуары</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white italic">Контакты</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-zinc-400 group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-orange-600/20 group-hover:text-orange-600 transition-colors">
                  <MapPin size={18} />
                </div>
                <span>г. Бишкек, ул. Скейтерская, 15</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-orange-600/20 group-hover:text-orange-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+996 (312) 123-456</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-orange-600/20 group-hover:text-orange-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span>info@skateshop.kg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 SkateShop. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
