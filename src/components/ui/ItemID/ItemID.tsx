"use client"
import { ReactNode, useEffect } from "react"
import { useAuth } from "@/lib/AuthContext"
import styles from "./ItemID.module.scss"

interface ItemIDProps {
  children: ReactNode
}

const ItemID: React.FC<ItemIDProps> = ({ children }) => {
  const { isAuthenticated, refreshToken } = useAuth()

  useEffect(() => {
    refreshToken()
  }, [refreshToken])

  return isAuthenticated ? <div className={styles.id}>ID: {children}</div> : null
}

export default ItemID
