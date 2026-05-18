/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Yangi ochilgan API routerimizga so'rov yuboramiz
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact_message', // API ajratib olishi uchun maxsus flag
          ...formData
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Не удалось отправить сообщение. Попробуйте позже.');
      }
    } catch (error) {
      alert('Ошибка соединения с сервером.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50/50 min-h-screen selection:bg-orange-600 selection:text-white">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-zinc-900 uppercase italic">
            СВЯЖИТЕСЬ <span className="text-orange-600">С НАМИ</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Есть вопросы или предложения? Мы всегда на связи и готовы помочь вам с выбором или заказом.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 italic">Телефон</h4>
                    <p className="text-zinc-900 font-bold">+996 (312) 123-456</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 italic">Email</h4>
                    <p className="text-zinc-900 font-bold">hello@skateshop.kg</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 italic">Адрес</h4>
                    <p className="text-zinc-900 font-bold">г. Бишкек, ул. Скейтерская, 15</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 border-l border-zinc-100 md:pl-10">
                <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-xs italic">Соцсети:</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-zinc-50 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-zinc-400 shadow-sm">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-4 bg-zinc-50 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-zinc-400 shadow-sm">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-4 bg-zinc-50 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-zinc-400 shadow-sm">
                    <Twitter size={20} />
                  </a>
                </div>
                <div className="mt-auto">
                    <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-xs italic">График работы:</h4>
                    <p className="text-zinc-500 text-sm font-medium">Пн-Пт: 10:00 — 20:00</p>
                    <p className="text-zinc-500 text-sm font-medium">Сб-Вс: 11:00 — 18:00</p>
                </div>
              </div>
            </div>

            {/* Embedded Map Mock */}
            <div className="w-full h-80 bg-zinc-200 rounded-[2.5rem] overflow-hidden relative border border-zinc-100 shadow-sm">
              <div className="absolute inset-0 bg-[url('https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A...')] bg-center bg-cover opacity-60 flex items-center justify-center">
                 <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white flex items-center gap-4 shadow-xl">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-black text-zinc-900">SKATESHOP HQ</h4>
                        <p className="text-xs text-zinc-500 font-semibold">Приезжайте в гости!</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-zinc-100 shadow-xl shadow-zinc-900/5">
            <h3 className="text-2xl font-black text-zinc-900 tracking-tighter mb-8 uppercase italic">ОТПРАВИТЬ СООБЩЕНИЕ</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2 italic">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    disabled={isLoading || isSubmitted}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 focus:border-orange-500 outline-none text-zinc-900 font-medium transition-all disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2 italic">Email адрес</label>
                  <input
                    type="email"
                    name="email"
                    disabled={isLoading || isSubmitted}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 focus:border-orange-500 outline-none text-zinc-900 font-medium transition-all disabled:opacity-50"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2 italic">Тема</label>
                <div className="relative">
                  <select
                    name="subject"
                    disabled={isLoading || isSubmitted}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 focus:border-orange-500 outline-none text-zinc-900 font-medium transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="">Выберите тему...</option>
                    <option value="Вопрос по заказу">Вопрос по заказу</option>
                    <option value="Выбор скейтборда">Выбор скейтборда</option>
                    <option value="Сотрудничество">Сотрудничество</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2 italic">Сообщение</label>
                <textarea
                  name="message"
                  disabled={isLoading || isSubmitted}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 focus:border-orange-500 outline-none text-zinc-900 font-medium transition-all resize-none disabled:opacity-50"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={isLoading || isSubmitted}
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-4xl font-black text-xs tracking-widest uppercase italic transition-all shadow-lg ${
                  isSubmitted 
                    ? 'bg-green-600 cursor-default shadow-green-600/10' 
                    : 'bg-orange-600 hover:bg-orange-700 shadow-orange-600/20 disabled:opacity-50'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    ОТПРАВКА...
                  </>
                ) : isSubmitted ? (
                  <>ОТПРАВЛЕНО!</>
                ) : (
                  <>
                    ОТПРАВИТЬ
                    <Send size={16} />
                  </>
                )}
              </motion.button>
              
              <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-bold italic">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;