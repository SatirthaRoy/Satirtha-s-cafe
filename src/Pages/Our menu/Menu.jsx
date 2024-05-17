import React from 'react'
import MenuTitle from '../../Shared components/MenuTitle'
import dessert from '/bistro-boss-restaurant-resources-main/assets/menu/dessert-bg.jpeg'
import pizza from '/bistro-boss-restaurant-resources-main/assets/menu/pizza-bg.jpg'
import salad from '/bistro-boss-restaurant-resources-main/assets/menu/salad-bg.jpg'
import soup from '/bistro-boss-restaurant-resources-main/assets/menu/soup-bg.jpg'
import SectionTitle from '../../Shared components/SectionTitle'
import ShowMenu from './Components/ShowMenu'
import useMenuFetch from '../../hooks/useMenuFetch'
import PageBanner from '../../Shared components/PageBanner'
import menuBanner from '/bistro-boss-restaurant-resources-main/assets/menu/banner3.jpg';

const Menu = () => {

  const [menu, loading] = useMenuFetch();
  const offeredItems = menu.filter(item => item.category === "offered")
  const dessertItems = menu.filter(item => item.category === "dessert")
  const soupItems = menu.filter(item => item.category === "soup")
  const pizzaItems = menu.filter(item => item.category === "pizza")
  const saladItems = menu.filter(item => item.category === "salad")

  return (
    <div className='text-4xl space-y-20'>
      <PageBanner img={menuBanner} title='Our Menu' para='Would you like to try a dish?'/>
      <SectionTitle title="today's offer" phrase="Don't miss"/>
      <ShowMenu items={offeredItems}/>
      <MenuTitle bg={dessert} title='desserts' para='Treat yourself to our delectable dessert options—indulge in creamy cheesecakes, decadent chocolate lava cakes, and refreshing fruit tarts.'/>
      <ShowMenu items={dessertItems}/>
      <MenuTitle bg={pizza} title='pizza' para='Satisfy your cravings with our mouthwatering pizzas—enjoy traditional favorites like pepperoni or margherita, or explore unique combinations like BBQ chicken or vegetarian supreme.'/>
      <ShowMenu items={pizzaItems}/>
      <MenuTitle bg={salad} title='salads' para='Opt for a lighter option with our fresh salads—delight in crisp Caesar salads, vibrant Greek salads, or protein-packed grilled chicken salads, all bursting with flavor and nutrition.'/>
      <ShowMenu items={saladItems}/>
      <MenuTitle bg={soup} title='soups' para='Warm up with our comforting soup selection—choose from classics like creamy tomato basil, hearty chicken noodle, or exotic Thai coconut curry.'/>
      <ShowMenu items={soupItems}/>
    </div>
  )
}

export default Menu