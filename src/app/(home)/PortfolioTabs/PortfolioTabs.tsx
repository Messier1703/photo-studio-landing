'use client'
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components'
import s from './PortfolioTabs.module.scss'

const PortfolioTabs = () => {
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
        clothing
      </TabPanel>
      <TabPanel id='footwear' className={s.tab_panel}>
        footwear
      </TabPanel>
      <TabPanel id='accessories' className={s.tab_panel}>
        accessories
      </TabPanel>
      <TabPanel id='items' className={s.tab_panel}>
        items
      </TabPanel>
      <TabPanel id='info' className={s.tab_panel}>
        info
      </TabPanel>
    </Tabs>
  )
}

export default PortfolioTabs
