import type { Metadata } from 'next'

import { Wix_Madefor_Text } from 'next/font/google'

import './globals.css'
import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import { isRokada } from '@/shared/constants'

const wixMadeforText = Wix_Madefor_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-wix-madefor',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  icons: {
    icon: isRokada ? '/favicon-rokada.ico' : '/favicon.ico',
  },
  title: {
    default: isRokada ? 'РОКАДА НН' : 'СИГНУМ НН',
    template: isRokada ? '%s | РОКАДА НН' : '%s | СИГНУМ НН',
  },
  description: isRokada
    ? 'Оборудование ROKADA для систем оповещения, громкой связи и музыкальной трансляции.'
    : 'Адресные и неадресные системы пожарной сигнализации СИГНУМ.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${wixMadeforText.variable} h-full antialiased`} lang='ru'>
      {isRokada && (
        <head>
          <style>{`:root { --primary-orange: #BB1E1C; }`}</style>
        </head>
      )}
      <body className='flex min-h-full flex-col bg-[#EDECEC]'>
        <Header />
        <div className='flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
