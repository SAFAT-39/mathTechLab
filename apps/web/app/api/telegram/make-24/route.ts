import { NextRequest, NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_BOT_TOKEN!
const bot = new TelegramBot(token)

// This disables polling, because we are using webhooks
bot.setWebHook(process.env.WEBHOOK_URL!)

export async function POST(req: NextRequest) {
  const data = await req.json()

  // Handle different update types
  const chatId = data.message?.chat?.id || data.callback_query?.message?.chat?.id
  if (!chatId) return NextResponse.json({ ok: false })
  
  const message = data.message?.text
  // Example: respond to /start command
  if (message === '/start' || message === '/play') {
    await bot.sendMessage(chatId, 'Welcome to Make 24!', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🎮 Play Make 24',
              web_app: { url: process.env.NEXT_PUBLIC_MINIAPP_URL }
            }
          ]
        ]
      }
    })
  }

  return NextResponse.json({ ok: true })
}
