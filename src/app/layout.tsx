import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from '@/layouts/Header/Header'
import Footer from '@/layouts/Footer/Footer'

import '@/styles/globals.scss'
import '@/styles/variables.scss'
import '@/styles/media.scss'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--var-montserrat' })

export const metadata: Metadata = {
  title: 'Impulse',
  description: 'Фото-студия',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body className={montserrat.variable}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

export default RootLayout
