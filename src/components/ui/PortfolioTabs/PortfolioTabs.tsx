'use client'
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components'
import styles from './PortfolioTabs.module.scss'
// import API_BASE_URL from '@/constants/API_BASE_URL'
// import requestInterface from '@/constants/requestInterface'
// import ky from 'ky'
// import { useState, useEffect } from 'react'

const PortfolioTabs = () => {
  // const [portfolio, setPortfolio] = useState<requestInterface[]>([])

  // useEffect(() => {
  //   const getPortfolio = async () => {
  //     try {
  //       const response = await ky.get(`${API_BASE_URL}/our_team`).json<requestInterface[]>()
  //       console.log(response)
  //       setPortfolio(response)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   getPortfolio()
  // }, [])

  return (
    <Tabs className={styles.tabs}>
      <TabList className={styles.tab_list}>
        <Tab id='clothing' className={styles.tab}>
          одежда
        </Tab>
        <Tab id='footwear' className={styles.tab}>
          обувь
        </Tab>
        <Tab id='accessories' className={styles.tab}>
          аксессуары
        </Tab>
        <Tab id='items' className={styles.tab}>
          предметная съемка
        </Tab>
        <Tab id='info' className={styles.tab}>
          инфографика
        </Tab>
      </TabList>
      <TabPanel id='clothing' className={styles.tab_panel}>
        <h3>одежда</h3>
      </TabPanel>
      <TabPanel id='footwear' className={styles.tab_panel}>
        <h3>обувь</h3>
      </TabPanel>
      <TabPanel id='accessories' className={styles.tab_panel}>
        <h3>аксессуары</h3>
      </TabPanel>
      <TabPanel id='items' className={styles.tab_panel}>
        <h3>предметная съемка</h3>
      </TabPanel>
      <TabPanel id='info' className={styles.tab_panel}>
        <h3>инфографика</h3>
      </TabPanel>
    </Tabs>
  )
}

export default PortfolioTabs
