/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/order/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, subject, message, customerName, customerPhone, customerAddress, cartItems, totalPrice } = body;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Ошибка: Telegram configuration missing in .env");
      return NextResponse.json({ success: false, error: 'Ошибка конфигурации сервера' }, { status: 500 });
    }

    let telegramMessage = '';

    // 1. AGAR CONTACT SAHIFASIDAN XAT KELSA
    if (type === 'contact_message') {
      telegramMessage = 
`✉️ *НОВОЕ СООБЩЕНИЕ С САЙТА SKATESHOP* ✉️\n\n` +
`👤 *Имя:* ${name}\n` +
`📧 *Email:* ${email}\n` +
`🏷️ *Тема:* ${subject}\n\n` +
`💬 *Сообщение:* \n_${message}_`;
    } 
    // 2. AGAR SAVATCHADAN BUYURTMA KELSA
    else {
      const itemsText = cartItems.map((item: any, idx: number) => (
        `${idx + 1}. ${item.name} (${item.quantity} шт.) — ${(item.price * item.quantity).toLocaleString('ru-RU')} СОМ`
      )).join('\n');

      telegramMessage = 
`🔥 *НОВЫЙ ЗАКАЗ ИЗ SKATESHOP КР* 🔥\n\n` +
`👤 *Имя клиента:* ${customerName}\n` +
`📞 *Телефон:* ${customerPhone}\n` +
`📍 *Адрес доставки:* ${customerAddress}\n\n` +
`🛒 *СПИСОК ТОВАРОВ:*\n${itemsText}\n\n` +
`🚚 *Доставка:* FREE EXPRESS\n` +
`💰 *ИТОГО К ОПЛАТЕ:* ${totalPrice.toLocaleString('ru-RU')} СОМ`;
    }

    // Telegram API'ga yuborish
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
      throw new Error('Telegram API responded with an error');
    }

    return NextResponse.json({ success: true, message: 'Успешно отправлено!' });
  } catch (error) {
    console.error("Telegram submit error:", error);
    return NextResponse.json({ success: false, error: 'Ошибка при отправке' }, { status: 500 });
  }
}