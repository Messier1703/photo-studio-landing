'use client'
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components'
import s from './PortfolioTabs.module.scss'
// import { useEffect, useState } from 'react'
// import ky from 'ky'
// import requestInterface from '@/constants/requestInterface'
// import API_BASE_URL from '@/constants/API_BASE_URL'

const PortfolioTabs = () => {
  // const [products, setProducts] = useState<requestInterface | null>(null)

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await ky.get(`${API_BASE_URL}/our_products`).json<requestInterface[]>()
  //       setProducts(response[0])
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }

  //   getProducts()
  // }, [])

  return (
    <Tabs className={s.tabs}>
      <TabList className={s.tab_list}>
        <Tab id='clothing' className={s.tab}>
          clothing
        </Tab>
        <Tab id='footwear' className={s.tab}>
          footwear
        </Tab>
        <Tab id='accessories' className={s.tab}>
          accessories
        </Tab>
        <Tab id='items' className={s.tab}>
          items
        </Tab>
        <Tab id='info' className={s.tab}>
          info
        </Tab>
      </TabList>
      <TabPanel id='clothing' className={s.tab_panel}>
        <h3>clothing</h3>
      </TabPanel>
      <TabPanel id='footwear' className={s.tab_panel}>
        <h3>footwear</h3>
      </TabPanel>
      <TabPanel id='accessories' className={s.tab_panel}>
        <h3>accessories</h3>
      </TabPanel>
      <TabPanel id='items' className={s.tab_panel}>
        <h3>items</h3>
      </TabPanel>
      <TabPanel id='info' className={s.tab_panel}>
        <h3>info</h3>
      </TabPanel>
    </Tabs>
  )
}

export default PortfolioTabs
