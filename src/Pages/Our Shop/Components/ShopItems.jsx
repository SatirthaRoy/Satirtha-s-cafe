import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuFetch from '../../../hooks/useMenuFetch';
import Card from '../../../Shared components/Card';
import { useParams } from 'react-router-dom';
import PagingItems from './PagingItems';

const ShopItems = () => {
  const [menu] = useMenuFetch();
  const categoryArr = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const {category} = useParams();
  console.log(categoryArr.indexOf(category));
  const [index, setIndex] = useState(categoryArr.indexOf(category));
  const dessertItems = menu.filter(item => item?.category === "dessert")
  const soupItems = menu.filter(item => item?.category === "soup")
  const pizzaItems = menu.filter(item => item?.category === "pizza")
  const saladItems = menu.filter(item => item?.category === "salad")
  const drinksItems = menu.filter(item => item?.category === "drinks")
  return (
    <Tabs defaultIndex={index}>
      <TabList className='flex gap-4 justify-center text-2xl font-medium mt-20'>
        <Tab className='uppercase cursor-pointer'>Salad</Tab>
        <Tab className='uppercase cursor-pointer'>Pizza</Tab>
        <Tab className='uppercase cursor-pointer'>soup</Tab>
        <Tab className='uppercase cursor-pointer'>dessert</Tab>
        <Tab className='uppercase cursor-pointer'>drinks</Tab>
      </TabList>

      <div className='mt-16 w-11/12 mx-auto'>
        <TabPanel>
          <PagingItems items={saladItems}/>
        </TabPanel>
        <TabPanel>
        <PagingItems items={pizzaItems}/>
        </TabPanel>
        <TabPanel>
          <PagingItems items={soupItems}/>
        </TabPanel>
        <TabPanel>
          <PagingItems items={dessertItems}/>
        </TabPanel>
        <TabPanel>
          <PagingItems items={drinksItems}/>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default ShopItems