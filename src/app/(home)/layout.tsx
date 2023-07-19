import { Roboto_Slab } from 'next/font/google'
import type { Metadata } from 'next'
import '../styles/reset.css'
import '../styles/globals.css'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: [
    '400',
    '700'
  ]
})

export const metadata: Metadata = {
  title: 'Dresan Blog',
  description: 'Blog personal donde encontrarás artículos cortos sobre desarrollo de software con consejos, trucos y una amplia variedad de temas relacionados con el frontend.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={robotoSlab.className}>
        {children}
      </body>
    </html>
  )
}
