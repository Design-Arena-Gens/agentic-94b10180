import { NextRequest, NextResponse } from 'next/server';
import { createBot } from '@/lib/bot';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'demo-token';

let bot: ReturnType<typeof createBot> | null = null;

function getBot() {
  if (!bot) {
    bot = createBot(BOT_TOKEN);
  }
  return bot;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (BOT_TOKEN === 'demo-token') {
      return NextResponse.json({
        status: 'demo_mode',
        message: 'Bot is running in demo mode. Set TELEGRAM_BOT_TOKEN environment variable to enable Telegram integration.',
        received: body
      });
    }

    const botInstance = getBot();
    await botInstance.handleUpdate(body);

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'active',
    bot: 'Mobile Price Comparison Bot',
    version: '1.0.0',
    features: [
      'Price comparison across multiple stores',
      'Real-time availability checks',
      'Detailed phone specifications',
      'Best deal recommendations'
    ],
    endpoints: {
      webhook: '/api/webhook'
    },
    demo_mode: BOT_TOKEN === 'demo-token'
  });
}
