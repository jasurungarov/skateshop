"use client";

import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/layout/Section";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["Все", "Скейтборды", "Круизеры", "Лонгборды"];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesSearch = p.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "Все" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0; // default newest/id
      });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <PageWrapper>
      <Section padding="md">
        <Container>
          <header className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="max-w-3xl">
                <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block italic">
                  EXPLORE OUR GEAR
                </span>
                <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 text-zinc-900 uppercase italic">
                  КАТАЛОГ <br /> <span className="text-zinc-200">2026</span>
                </h1>
                <p className="text-zinc-400 max-w-xl text-xl font-medium leading-relaxed italic">
                  Профессиональный инвентарь, созданный для тех, кто готов
                  бросить вызов гравитации и городскому пространству.
                </p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className="text-zinc-900 font-black text-6xl leading-none italic">
                  {filteredProducts.length}
                </span>
                <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] italic">
                  ТОВАРОВ НАЙДЕНО
                </span>
              </div>
            </div>
          </header>

          {/* Filters and Search Bar - Premium Sticky Design */}
          <div className="sticky top-24 z-50 mb-20">
            <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/60 rounded-4xl shadow-2xl shadow-black/30 p-5 flex flex-col gap-4">
              {/* SEARCH */}
              <div className="relative w-full">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="ПОИСК МОДЕЛИ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
        w-full
        pl-11 pr-4 py-3
        bg-zinc-900/70
        border border-zinc-800
        rounded-4xl
        text-sm
        text-white
        font-semibold
        tracking-wide
        placeholder:text-zinc-500
        focus:outline-none
        focus:ring-2
        focus:ring-orange-600
        focus:border-orange-600
        transition-all
        "
                />
              </div>

              {/* FILTER BAR */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* CATEGORIES */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`
            px-5 py-2
            rounded-full
            text-xs
            font-semibold
            uppercase
            tracking-wide
            whitespace-nowrap
            transition-all
            duration-200
            ${
              selectedCategory === cat
                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
            }
            `}>
                      {cat}
                    </button>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="hidden lg:block h-8 w-px bg-zinc-800" />

                {/* SORT */}
                <div className="relative w-full lg:w-60">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="
          w-full
          appearance-none
          bg-zinc-900
          border border-zinc-800
          rounded-4xl
          pl-4 pr-10 py-2.5
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-white
          cursor-pointer
          focus:outline-none
          focus:ring-2
          focus:ring-orange-600
          focus:border-orange-600
          transition-all
          ">
                    <option value="newest">Сначала новинки</option>
                    <option value="price-low">Цена: по возрастанию</option>
                    <option value="price-high">Цена: по убыванию</option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results with Animation */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${sortBy}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center">
                <div className="w-24 h-24 bg-zinc-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                  <Search size={40} className="text-zinc-200" />
                </div>
                <h3 className="text-3xl font-black text-zinc-900 mb-4 uppercase tracking-tighter italic">
                  НИЧЕГО НЕ НАЙДЕНО
                </h3>
                <p className="text-zinc-400 font-medium text-lg italic">
                  Попробуйте изменить параметры фильтрации или поиска
                </p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Все");
                  }}
                  className="mt-10 text-orange-600 italic">
                  СБРОСИТЬ ВСЕ ФИЛЬТРЫ
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default CatalogPage;
