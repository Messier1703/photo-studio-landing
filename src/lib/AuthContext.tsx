"use client"
import { createContext, useContext, useState, ReactNode } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"

interface AuthContextProps {
  isAuthenticated: boolean
  refreshToken: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const refreshToken = async () => {
    try {
      const response = await ky.post(`${API_BASE_URL}/auth/refresh_token`, { credentials: "include" })
      console.log(response)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Error refreshing token:", error)
      setIsAuthenticated(false)
    }
  }

  const contextValue: AuthContextProps = {
    isAuthenticated,
    refreshToken,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
