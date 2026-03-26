'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to API
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50/50 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-zinc-900">
            СВЯЖИТЕСЬ <span className="text-orange-600">С НАМИ</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
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
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Телефон</h4>
                    <p className="text-zinc-900 font-bold">+996 (312) 123-456</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-zinc-900 font-bold">hello@skateshop.kg</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Адрес</h4>
                    <p className="text-zinc-900 font-bold">г. Бишкек, ул. Скейтерская, 15</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 border-l border-zinc-100 md:pl-10">
                <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-xs">Соцсети:</h4>
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
                    <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-xs">График работы:</h4>
                    <p className="text-zinc-500 text-sm">Пн-Пт: 10:00 — 20:00</p>
                    <p className="text-zinc-500 text-sm">Сб-Вс: 11:00 — 18:00</p>
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
                        <p className="text-xs text-zinc-500">Приезжайте в гости!</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-zinc-100 shadow-xl shadow-zinc-900/5">
            <h3 className="text-2xl font-black text-zinc-900 tracking-tighter mb-8">ОТПРАВИТЬ СООБЩЕНИЕ</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-2">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-50 border border-orange-600 rounded-2xl p-4 focus:ring-2 focus:ring-orange-600 outline-none text-zinc-900 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-2">Email адрес</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-50 border border-orange-600 rounded-2xl p-4 focus:ring-2 focus:ring-orange-600 outline-none text-zinc-900 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-2">Тема</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-50 border border-orange-600 rounded-2xl p-4 focus:ring-2 focus:ring-orange-600 outline-none text-zinc-900 transition-all appearance-none"
                >
                  <option value="">Выберите тему...</option>
                  <option value="Вопрос по заказу">Вопрос по заказу</option>
                  <option value="Выбор скейтборда">Выбор скейтборда</option>
                  <option value="Сотрудничество">Сотрудничество</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-2">Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-zinc-50 border border-orange-600 rounded-2xl p-4 focus:ring-2 focus:ring-orange-600 outline-none text-zinc-900 transition-all resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-4xl font-bold text-white transition-all shadow-lg ${
                  isSubmitted ? 'bg-green-600 cursor-default' : 'bg-orange-600 hover:bg-orange-700 shadow-orange-600/20'
                }`}
              >
                {isSubmitted ? (
                  <>ОТПРАВЛЕНО!</>
                ) : (
                  <>
                    ОТПРАВИТЬ
                    <Send size={18} />
                  </>
                )}
              </motion.button>
              
              <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-medium">
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
