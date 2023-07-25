import { Fira_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@components/Header'
import '@styles/reset.css'
import '@styles/globals.css'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: [
    '400',
    '700'
  ]
})

export const metadata: Metadata = {
  title: 'Dresan - Blog',
  description: 'Blog personal sobre desarrollo de software enfocado especialmente en tecnologías Frontend (CSS, Javascript, Next.js, React, entre otras).',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={`${firaSans.className} body_container`}>
        <div className='radial_gradient_background' draggable='false'></div>
        <Header />
        <main className='main_container'>
          {children}
        </main>
      </body>
    </html>
  )
}
