import React from 'react';
import Announce from '../components/Announce'; 
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Slider/>
      <Categories/>
      <Products />
    </div>
  )
}

export default Home