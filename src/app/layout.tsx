import './globals.css'
import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audius Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="dark"
          accentColor="iris"
          grayColor="sand"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}

