'use client'
import React, { useEffect, useState } from 'react'
import ky from 'ky'
import API_BASE_URL from '@/constants/API_BASE_URL'

interface ApiResponse {
  id: number
  title: string
  description: string
  title_1: string
  description_1: string
  title_2: string
  description_2: string
  title_3: string
  description_3: string
  title_4: string
  description_4: string
}

const ApiComponent: React.FC = () => {
  const [services, setServices] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<ApiResponse[]>()
        setServices(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
  }, [])

  return (
    <div>
      {services && (
        <>
          <p>ID: {services.id}</p>
          <p>Title 1: {services.title_1}</p>
          <p>Description 1: {services.description_1}</p>
          <p>Title 2: {services.title_2}</p>
          <p>Description 2: {services.description_2}</p>
          <p>Title 3: {services.title_3}</p>
          <p>Description 3: {services.description_3}</p>
          <p>Title 4: {services.title_4}</p>
          <p>Description 4: {services.description_4}</p>
        </>
      )}
    </div>
  )
}

export default ApiComponent
