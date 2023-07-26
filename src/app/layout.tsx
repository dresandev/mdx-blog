import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import '@styles/reset.css'
import '@styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: [
    '400',
    '700'
  ]
})

export const metadata: Metadata = {
  title: 'Dresan Blog',
  description: 'Blog personal sobre desarrollo de software enfocado especialmente en tecnologías Frontend (CSS, Javascript, Next.js, React, entre otras).',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={`${roboto.className} bodyContainer`}>
        <div className='radialGradientBackground' draggable='false'></div>
        <Header />
        <main className='mainContainer'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
