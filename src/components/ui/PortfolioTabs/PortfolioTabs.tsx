'use client'
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components'
import s from './PortfolioTabs.module.scss'
import API_BASE_URL from '@/constants/API_BASE_URL'
import requestInterface from '@/constants/requestInterface'
import ky from 'ky'
import { useState, useEffect } from 'react'

const PortfolioTabs = () => {
  const [portfolio, setPortfolio] = useState<requestInterface[]>([])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_team`).json<requestInterface[]>()
        console.log(response)
        setPortfolio(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <Tabs className={s.tabs}>
      <TabList className={s.tab_list}>
        <Tab id='clothing' className={s.tab}>
          одежда
        </Tab>
        <Tab id='footwear' className={s.tab}>
          обувь
        </Tab>
        <Tab id='accessories' className={s.tab}>
          аксессуары
        </Tab>
        <Tab id='items' className={s.tab}>
          предметная съемка
        </Tab>
        <Tab id='info' className={s.tab}>
          инфографика
        </Tab>
      </TabList>
      <TabPanel id='clothing' className={s.tab_panel}>
        <h3>одежда</h3>
      </TabPanel>
      <TabPanel id='footwear' className={s.tab_panel}>
        <h3>обувь</h3>
      </TabPanel>
      <TabPanel id='accessories' className={s.tab_panel}>
        <h3>аксессуары</h3>
      </TabPanel>
      <TabPanel id='items' className={s.tab_panel}>
        <h3>предметная съемка</h3>
      </TabPanel>
      <TabPanel id='info' className={s.tab_panel}>
        <h3>инфографика</h3>
      </TabPanel>
    </Tabs>
  )
}

export default PortfolioTabs
