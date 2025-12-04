import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Price Comparison Bot | ربات مقایسه قیمت موبایل',
  description: 'Telegram bot for mobile phone price analysis and comparison across multiple online stores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
