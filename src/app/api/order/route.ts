/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/order/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, customerAddress, cartItems, totalPrice } = body;

    // .env.local faylidan maxfiy ma'lumotlarni xavfsiz o'qib olamiz
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Agar .env faylida ma'lumotlar kiritilmagan bo'lsa, xatolik qaytaramiz (Crash bo'lmasligi uchun)
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Ошибка: Telegram Bot token yoki Chat ID .env faylida topilmadi!");
      return NextResponse.json({ success: false, error: 'Внутренняя ошибка конфигурации сервера' }, { status: 500 });
    }

    // Tovar ro'yxatini chiroyli matnga aylantirish
    const itemsText = cartItems.map((item: any, idx: number) => (
      `${idx + 1}. ${item.name} (${item.quantity} шт.) — ${(item.price * item.quantity).toLocaleString('ru-RU')} СОМ`
    )).join('\n');

    // Telegramga boradigan chiroyli matn shabloni
    const telegramMessage = 
`🔥 *НОВЫЙ ЗАКАЗ ИЗ SKATEHUB КР* 🔥\n\n` +
`👤 *Имя клиента:* ${customerName}\n` +
`📞 *Телефон:* ${customerPhone}\n` +
`📍 *Адрес доставки:* ${customerAddress}\n\n` +
`🛒 *СПИСОК ТОВАРОВ:*\n${itemsText}\n\n` +
`🚚 *Доставка:* FREE EXPRESS\n` +
`💰 *ИТОГО К ОПЛАТЕ:* ${totalPrice.toLocaleString('ru-RU')} СОМ`;

    // Telegram API'ga so'rov yuborish
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true, message: 'Заказ успешно отправлен!' });
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json({ success: false, error: 'Ошибка при отправке заказа' }, { status: 500 });
  }
}