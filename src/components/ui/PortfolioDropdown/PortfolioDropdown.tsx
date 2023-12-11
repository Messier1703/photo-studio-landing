'use client'

// Install react-select if you haven't already
// npm install react-select

import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import styles from './PortfolioDropdown.module.scss' // Create a new stylesheet for the dropdown component
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'
import Image from 'next/image'
import placeholderText from '@/constants/placeholderText'

interface PortfolioItem {
  id: number | undefined
  title: string
  images: Image[]
}

interface PortfolioDropdownProps {
  id: string
}

const PortfolioDropdown: React.FC<PortfolioDropdownProps> = ({ id }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false)

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
        setIsDataLoaded(true)
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

  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleChange = (selected: any) => {
    setSelectedOption(selected)
  }

  return (
    <div className={styles.dropdown}>
      <Select options={options} value={selectedOption} onChange={handleChange} className={styles.select} isDisabled={!isDataLoaded} />

      {isDataLoaded && (
        <div className={styles.tab_panel}>
          <h3>{selectedOption.label}</h3>
          <div className={styles.tab_image_wrapper}>
            {portfolio
              .find((item) => item.title.toLowerCase() === selectedOption.value)
              ?.images.map((image) => (
                <figure key={image.id}>
                  <Image blurDataURL={image.image} src={image.image} alt={`Image ${image.id}`} width={300} height={420} />
                </figure>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioDropdown
