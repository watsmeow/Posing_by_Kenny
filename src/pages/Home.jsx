import React from 'react';
import Announce from '../components/Announce'; 
import Categories from '../components/Categories';
import Nav from '../components/Nav'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Nav/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home