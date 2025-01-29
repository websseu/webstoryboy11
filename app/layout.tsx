import type { Metadata } from 'next'
import './globals.css'
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SLOGAN,
  APP_KEYWORDS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  )
}
