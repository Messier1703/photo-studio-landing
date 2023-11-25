import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from '@/components/navigation/Header/Header'
import Footer from '@/components/navigation/Footer/Footer'

import '@/styles/globals.scss'
import '@/styles/variables.scss'
import '@/styles/media.scss'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--var-montserrat' })

export const metadata: Metadata = {
  title: 'lorem ipsum dolor',
  description: 'Generated by create next app',
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
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
