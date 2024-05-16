import React from 'react'
import MenuTitle from '../../Shared components/MenuTitle'
import dessert from '/bistro-boss-restaurant-resources-main/assets/menu/dessert-bg.jpeg'
import pizza from '/bistro-boss-restaurant-resources-main/assets/menu/pizza-bg.jpg'
import salad from '/bistro-boss-restaurant-resources-main/assets/menu/salad-bg.jpg'
import soup from '/bistro-boss-restaurant-resources-main/assets/menu/soup-bg.jpg'
import MenuBanner from './Components/MenuBanner'

const Menu = () => {
  return (
    <div className='text-4xl space-y-20'>
      <MenuBanner/>
      <MenuTitle bg={dessert} title='desserts' para='Treat yourself to our delectable dessert options—indulge in creamy cheesecakes, decadent chocolate lava cakes, and refreshing fruit tarts.'/>
      <MenuTitle bg={pizza} title='pizza' para='Satisfy your cravings with our mouthwatering pizzas—enjoy traditional favorites like pepperoni or margherita, or explore unique combinations like BBQ chicken or vegetarian supreme.'/>
      <MenuTitle bg={salad} title='salads' para='Opt for a lighter option with our fresh salads—delight in crisp Caesar salads, vibrant Greek salads, or protein-packed grilled chicken salads, all bursting with flavor and nutrition.'/>
      <MenuTitle bg={soup} title='soups' para='Warm up with our comforting soup selection—choose from classics like creamy tomato basil, hearty chicken noodle, or exotic Thai coconut curry.'/>
    </div>
  )
}

export default Menu