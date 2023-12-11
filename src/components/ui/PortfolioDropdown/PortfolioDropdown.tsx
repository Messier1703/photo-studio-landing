'use client'

import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown'
import styles from './PortfolioDropdown.module.scss'
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'
import Image from 'next/image'
import placeholderText from '@/constants/placeholderText'
import 'react-dropdown/style.css'

interface Image {
  id: number | undefined
  image: string
}

interface PortfolioItem {
  id: number | undefined
  title: string
  images: Image[]
}

const PortfolioDropdown = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: undefined,
      title: `${placeholderText}`,
      images: [
        {
          id: undefined,
          image: '',
        },
      ],
    },
  ])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_products`).json<PortfolioItem[]>()
        console.log(response)
        setPortfolio(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  const options = portfolio.map((item) => ({
    value: item.title.toLowerCase(),
    label: item.title,
  }))

  const defaultOption = options[0]

  return (
    <Dropdown
      className={styles.dropdown}
      options={options}
      // onChange={this._onSelect}
      value={defaultOption}
      placeholder='Select an option'
    />
  )
}

export default PortfolioDropdown
