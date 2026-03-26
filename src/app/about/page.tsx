'use client';

import { motion } from 'framer-motion'
import { ArrowRight, Award, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  const stats = [
    { label: 'Лет на рынке', value: '10+' },
    { label: 'Довольных райдеров', value: '50к+' },
    { label: 'Моделей в наличии', value: '200+' },
    { label: 'Городов доставки', value: '150+' },
  ];

  const team = [
    { name: 'Алексей Громов', role: 'Основатель / Про-райдер', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
    { name: 'Мария Светлова', role: 'Ведущий дизайнер', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
    { name: 'Игорь Волков', role: 'Эксперт по железу', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
    { name: 'Елена Кузнецова', role: 'Контент-менеджер', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="relative h-[60vh] rounded-[4rem] overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1600" 
            alt="Skatepark background"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-orange-600 font-black tracking-[0.5em] text-xs uppercase mb-6"
            >
              НАША ИСТОРИЯ
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-8"
            >
              БОЛЬШЕ ЧЕМ <br /> <span className="text-orange-600 italic">МАГАЗИН</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-zinc-300 text-lg md:text-xl font-medium"
            >
              Мы начали с мечты создать идеальное место для райдеров, где качество встречается с духом свободы и профессионализмом.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 flex flex-col items-center text-center hover:bg-zinc-950 hover:text-white transition-all group"
            >
              <span className="text-5xl font-black mb-2 tracking-tighter group-hover:text-orange-600 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">МИССИЯ И ЦЕННОСТИ</span>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-10 leading-[0.9] uppercase">
                МЫ ДВИГАЕМ <br /> КУЛЬТУРУ <span className="text-zinc-200 underline decoration-orange-600 decoration-8 underline-offset-10">ВПЕРЕД</span>
            </h2>
            <div className="space-y-8">
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Award size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black mb-2 uppercase">Высшее качество</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">Каждая доска в нашем магазине проходит тщательный контроль. Мы работаем только с официальными дистрибьюторами и брендами, которые доказали свою надежность годами.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black mb-2 uppercase">Сообщество</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">SkateHub — это не просто коммерция. Мы поддерживаем локальные контесты, спонсируем талантливых ребят и верим, что скейтбординг объединяет людей.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-600/5 rounded-[4rem] group-hover:bg-orange-600/10 transition-all blur-xl" />
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-zinc-100 shadow-2xl">
                <Image 
                    src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000" 
                    alt="Action skate shot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-zinc-950 py-32 rounded-[4rem] mx-6 mb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">НАША КОМАНДА</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-8">
                КТО СТОИТ <br /> ЗА КУЛИСАМИ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-3/4 rounded-[2.5rem] overflow-hidden relative mb-6 border border-white/5">
                    <Image 
                        src={member.img} 
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-1 leading-none">{member.name}</h4>
                <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center">
          <div className="bg-orange-50 p-20 rounded-[4rem] border border-orange-100 flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-10 max-w-2xl leading-none">
                ГОТОВ ВСТАТЬ <br /> НА <span className="text-orange-600">ДОСКУ?</span>
            </h3>
            <Link 
                href="/catalog" 
                className="bg-zinc-950 text-white font-black py-6 px-16 rounded-full hover:bg-orange-600 transition-all flex items-center gap-4 tracking-widest text-sm shadow-2xl shadow-zinc-950/20"
            >
                ВЫБРАТЬ МОДЕЛЬ
                <ArrowRight size={20} />
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;
