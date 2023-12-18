import { ReactNode } from "react"

import Header from "@/layouts/Header/Header"
import Footer from "@/layouts/Footer/Footer"

interface UserLayoutProps {
  children: ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default UserLayout
