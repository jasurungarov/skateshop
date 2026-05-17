// 'use client';

// import { motion } from 'framer-motion'
// import { ArrowRight, Award, Users } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// const AboutPage = () => {
//   const stats = [
//     { label: 'Лет на рынке', value: '10+' },
//     { label: 'Довольных райдеров', value: '50к+' },
//     { label: 'Моделей в наличии', value: '200+' },
//     { label: 'Городов доставки', value: '150+' },
//   ];

//   const team = [
//     { name: 'Алексей Громов', role: 'Основатель / Про-райдер', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
//     { name: 'Мария Светлова', role: 'Ведущий дизайнер', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
//     { name: 'Игорь Волков', role: 'Эксперт по железу', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
//     { name: 'Елена Кузнецова', role: 'Контент-менеджер', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
//   ];

//   return (
//     <div className="pt-32 pb-24 bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 mb-32">
//         <div className="relative h-[60vh] rounded-[4rem] overflow-hidden">
//           <Image 
//             src="/Kyrgyzstan.png" 
//             alt="Skatepark background"
//             fill
//             className="object-cover opacity-60"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
//             <motion.span 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-orange-600 font-black tracking-[0.5em] text-xs uppercase mb-6"
//             >
//               НАША ИСТОРИЯ
//             </motion.span>
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-8"
//             >
//               БОЛЬШЕ ЧЕМ <br /> <span className="text-orange-600 italic">МАГАЗИН</span>
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="max-w-2xl text-zinc-300 text-lg md:text-xl font-medium"
//             >
//               Мы начали с мечты создать идеальное место для райдеров, где качество встречается с духом свободы и профессионализмом.
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="container mx-auto px-6 mb-32">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 flex flex-col items-center text-center hover:bg-zinc-950 hover:text-white transition-all group"
//             >
//               <span className="text-5xl font-black mb-2 tracking-tighter group-hover:text-orange-600 transition-colors">
//                 {stat.value}
//               </span>
//               <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="container mx-auto px-6 mb-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">МИССИЯ И ЦЕННОСТИ</span>
//             <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-10 leading-[0.9] uppercase">
//                 МЫ ДВИГАЕМ <br /> КУЛЬТУРУ <span className="text-zinc-200 underline decoration-orange-600 decoration-8 underline-offset-10">ВПЕРЕД</span>
//             </h2>
//             <div className="space-y-8">
//                 <div className="flex gap-6">
//                     <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
//                         <Award size={24} />
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-black mb-2 uppercase">Высшее качество</h4>
//                         <p className="text-zinc-500 leading-relaxed font-medium">Каждая доска в нашем магазине проходит тщательный контроль. Мы работаем только с официальными дистрибьюторами и брендами, которые доказали свою надежность годами.</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-6">
//                     <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
//                         <Users size={24} />
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-black mb-2 uppercase">Сообщество</h4>
//                         <p className="text-zinc-500 leading-relaxed font-medium">SkateHub — это не просто коммерция. Мы поддерживаем локальные контесты, спонсируем талантливых ребят и верим, что скейтбординг объединяет людей.</p>
//                     </div>
//                 </div>
//             </div>
//           </div>
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-orange-600/5 rounded-[4rem] group-hover:bg-orange-600/10 transition-all blur-xl" />
//             <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-zinc-100 shadow-2xl">
//                 <Image 
//                     src="/Bishkek.png" 
//                     alt="Action skate shot"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="bg-zinc-950 py-32 rounded-[4rem] mx-6 mb-32 overflow-hidden relative">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full" />
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center mb-20">
//             <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">НАША КОМАНДА</span>
//             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-8">
//                 КТО СТОИТ <br /> ЗА КУЛИСАМИ
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group"
//               >
//                 <div className="aspect-3/4 rounded-[2.5rem] overflow-hidden relative mb-6 border border-white/5">
//                     <Image 
//                         src={member.img} 
//                         alt={member.name}
//                         fill
//                         className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
//                     />
//                 </div>
//                 <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-1 leading-none">{member.name}</h4>
//                 <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="container mx-auto px-6 text-center">
//           <div className="bg-orange-50 p-20 rounded-[4rem] border border-orange-100 flex flex-col items-center">
//             <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-10 max-w-2xl leading-none">
//                 ГОТОВ ВСТАТЬ <br /> НА <span className="text-orange-600">ДОСКУ?</span>
//             </h3>
//             <Link 
//                 href="/catalog" 
//                 className="bg-zinc-950 text-white font-black py-6 px-16 rounded-full hover:bg-orange-600 transition-all flex items-center gap-4 tracking-widest text-sm shadow-2xl shadow-zinc-950/20"
//             >
//                 ВЫБРАТЬ МОДЕЛЬ
//                 <ArrowRight size={20} />
//             </Link>
//           </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

'use client';

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Award, Users, MapPin, Truck, HelpCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  // Qirg'iziston bozoriga moslashtirilgan statistika
  const stats = [
    { label: 'Лет в индустрии КР', value: '7+' },
    { label: 'Райдеров с нами', value: '12к+' },
    { label: 'Брендов в каталоге', value: '25+' },
    { label: 'Регионов доставки', value: '7/7' }, // 7 oblast
  ];

  const timeline = [
    { year: '2021', title: 'Зарождение из багажника', desc: 'Начали с привоза 10 профессиональных дек из США для друзей, продавая их прямо на парковке у Филармонии.' },
    { year: '2023', title: 'Первый физический шоп', desc: 'Открыли небольшое пространство в центре Бишкека, ставшее культовой точкой сбора локальных райдеров.' },
    { year: '2025', title: 'Выход на республиканский уровень', desc: 'Запустили быструю доставку по всем регионам: от Оша до Каракола. Организовали первый масштабный Go Skateboarding Day в КР.' },
  ];

  // Lokal jamoa a'zolari
  const team = [
    { name: 'Данияр Асанов', role: 'Основатель / Про-райдер', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
    { name: 'Алина Кадырова', role: 'Ведущий дизайнер & Скейт-активист', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
    { name: 'Тимур Бекмамбетов', role: 'Главный мастер / Эксперт по железу', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
    { name: 'Камила Эркинбекова', role: 'Контент и Комьюнити-менеджер', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
  ];

  // Qirg'izistondagi mashhur skeyt spotlari bloki (Yangi qo'shimcha)
  const localSpots = [
    { name: 'Филармония им. Т. Сатылганова', city: 'Бишкек', desc: 'Легендарное место с идеальным мрамором, где зарождался кыргызский скейтбординг.' },
    { name: 'Парк Здоровья (Новый Скейт-парк)', city: 'Бишкек', desc: 'Современная плаза и пул для тех, кто хочет прокачивать дропы и радиусы каждый день.' },
    { name: 'Центральная площадь', city: 'Ош', desc: 'Главная точка притяжения южных райдеров с отличным покрытием для флэт-триков.' },
  ];

  const faqs = [
    { q: 'Все ли товары у вас оригинальные?', a: 'Да, исключительно. Мы являемся официальными дилерами ведущих дистрибьюторов из США и Европы. Никаких "копий" или китайских реплик — только оригинальный и безопасный стафф, который выдержит жесткие нагрузки.' },
    { q: 'Как работает доставка по Кыргызстану?', a: 'По Бишкеку мы доставляем курьером в день заказа (при оформлении до 18:00). В Ош, Джалал-Абад, Нарын, Каракол, Талас и Баткен отправляем через проверенные курьерские службы и региональные такси-сервисы. Срок доставки — от 24 до 48 часов.' },
    { q: 'Помогаете ли вы собрать скейтборд новичку?', a: 'Это наша главная фишка! Вы можете прийти к нам в шоп или написать онлайн, и наши эксперты бесплатно соберут кастом под ваш рост, размер обуви и стиль катания (стрит, парк, круизинг). Подберем правильную ширину деки, жесткость колес и конкейв.' },
    { q: 'Есть ли гарантия на доски?', a: 'Мы даем гарантию на заводской брак (например, расслоение деки в первые дни использования). Гарантия не распространяется на естественные поломки в процессе выполнения трюков (сломанный ноуз или тэйл при неправильном приземлении), так как скейтбординг — экстремальный спорт.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen selection:bg-orange-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="relative h-[70vh] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
          <Image 
            src="/Kyrgyzstan.png" 
            alt="Skatepark background in Kyrgyzstan"
            fill
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-black tracking-[0.5em] text-xs uppercase mb-6"
            >
              ПЕРВЫЙ ПРОФЕССИОНАЛЬНЫЙ СКЕЙТШОП В КР
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-8"
            >
              БОЛЬШЕ ЧЕМ <br /> <span className="text-orange-600 italic">МАГАЗИН</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-zinc-300 text-lg md:text-xl font-medium leading-relaxed"
            >
              Мы начали в Бишкеке с простой мечты — дать райдерам Кыргызстана доступ к лучшим мировым брендам и построить крепкое, независимое комьюнити.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-100 flex flex-col items-center text-center hover:bg-zinc-950 hover:text-white transition-all duration-300 group shadow-xs"
            >
              <span className="text-4xl md:text-5xl font-black mb-2 tracking-tighter group-hover:text-orange-500 transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission, Vision & Advantages */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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
                        <h4 className="text-lg font-black mb-2 uppercase text-zinc-900">100% Оригинальный стафф</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">Никаких подделок. Мы официально привозим деки, траки и колеса от топ-брендов (Baker, Primitive, Independent, Spitfire). Нам важно ваше безопасное катание.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black mb-2 uppercase text-zinc-900">Развитие локальной сцены</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">SkateHub — это не просто коммерция. Мы строим самодельные фигуры, организуем ежегодный Go Skateboarding Day в Бишкеке и спонсируем молодых кыргызстанских талантов.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Truck size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black mb-2 uppercase text-zinc-900">Быстрая доставка по КР</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">Отправим ваш кастом в Ош, Джалал-Абад, Каракол, Нарын или Баткен в течение 24-48 часов. Доставка по Бишкеку — в день заказа.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-600/5 rounded-[4rem] group-hover:bg-orange-600/10 transition-all blur-xl" />
            <div className="relative aspect-square rounded-[3rem] md:rounded-[3.5rem] overflow-hidden border border-zinc-100 shadow-2xl">
                <Image 
                  src="/Bishkek.png" 
                  alt="Action skate shot in Bishkek"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Kyrgyzstan Skate Spots (Yangi Bo'lim) */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
          <div className="max-w-2xl mb-12">
            <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">ГДЕ КАТАТЬСЯ</span>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-4">ГИД ПО СКЕЙТ-СПОТАМ НАШЕЙ СТРАНЫ</h3>
            <p className="text-zinc-500 font-medium">Мы не только продаем доски, но и знаем каждый угол, где можно сделать чистый щелчок. Лови лучшие точки:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localSpots.map((spot, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border shadow-xs border-orange-500/40 transition-all group">
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <MapPin size={18} className="animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">{spot.city}</span>
                </div>
                <h5 className="text-lg font-black text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-orange-600 transition-colors">{spot.name}</h5>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-32 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-4">
            <HelpCircle size={24} />
          </div>
          <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-2 block">ОСТАЛИСЬ ВОПРОСЫ?</span>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-orange-200 rounded-2xl overflow-hidden transition-colors bg-zinc-50/50">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-black text-zinc-900 text-base md:text-lg uppercase tracking-tight hover:bg-zinc-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown size={20} className={`text-zinc-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-orange-600' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="p-6 pt-0 text-zinc-500 font-medium text-sm md:text-base leading-relaxed border-t border-zinc-100 bg-white">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline Section (YANGI) */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">ЭВОЛЮЦИЯ SKATEHUB</span>
          <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase">ПУТЬ, КОТОРЫЙ МЫ ПРОШЛИ</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-0.5 before:bg-zinc-100 before:hidden before:md:block">
          {timeline.map((item, idx) => (
            <div key={idx} className="bg-zinc-50 p-8 rounded-3xl border relative z-10 hover:bg-white border-orange-500 transition-all group">
              <span className="text-3xl font-black text-orange-600 block mb-4 italic group-hover:scale-110 transition-transform origin-left">{item.year}</span>
              <h5 className="text-lg font-black text-zinc-900 uppercase mb-2 tracking-tight">{item.title}</h5>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-zinc-950 py-32 rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-6 mb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">НАША КОМАНДА</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-8">
                КТО СТОИТ <br /> ЗА КУЛИСАМИ
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto text-sm font-medium">Каждый из нас живет скейтбордингом и готов помочь тебе собрать идеальный сетап.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-3/4 rounded-4xl md:rounded-[2.5rem] overflow-hidden relative mb-6 border border-white/5 bg-zinc-900">
                    <Image 
                        src={member.img} 
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-1 leading-none">{member.name}</h4>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center">
          <div className="bg-orange-50 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-orange-100 flex flex-col items-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 blur-2xl rounded-full" />
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-10 max-w-2xl leading-none uppercase">
                ГОТОВ ВСТАТЬ <br /> НА <span className="text-orange-600">ДОСКУ?</span>
            </h3>
            <p className="text-zinc-600 font-medium max-w-md mb-8 text-sm md:text-base">
              Собери свой первый кастом или обнови старый щелчок. Бесплатная консультация от наших мастеров гарантирована.
            </p>
            <Link 
                href="/catalog" 
                className="bg-zinc-950 text-white font-black py-5 px-12 md:px-16 rounded-full hover:bg-orange-600 transition-all flex items-center gap-4 tracking-widest text-xs md:text-sm shadow-2xl shadow-zinc-950/20 group"
            >
                ВЫБРАТЬ МОДЕЛЬ
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;