import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuFetch from '../../../hooks/useMenuFetch';
import Card from '../../../Shared components/Card';
import { useParams } from 'react-router-dom';

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
        <Tab className='uppercase'>Salad</Tab>
        <Tab className='uppercase'>Pizza</Tab>
        <Tab className='uppercase'>soup</Tab>
        <Tab className='uppercase'>dessert</Tab>
        <Tab className='uppercase'>drinks</Tab>
      </TabList>

      <div className='mt-16 w-11/12 mx-auto'>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {saladItems.map((item, i) => <Card key={i} item={item}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {pizzaItems.map((item, i) => <Card key={i} item={item}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {soupItems.map((item, i) => <Card key={i} item={item}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {dessertItems.map((item, i) => <Card key={i} item={item}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {drinksItems.map((item, i) => <Card key={i} item={item}/>)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default ShopItems