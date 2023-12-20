import { ReactNode } from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "@/styles/globals.scss"
import "@/styles/variables.scss"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--var-montserrat" })

export const metadata: Metadata = {
  title: "Impulse",
  description: "Фото-студия",
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body className={montserrat.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
