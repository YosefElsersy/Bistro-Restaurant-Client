import React from 'react'
import Banner from '../home/Banner'
import Catagories from './Catagories'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import UniqueServices from './UniqueServices'
import OurCustomers from './OurCustomers'



const Home = () => {

  return (
    <>
       <Banner/>
       <Catagories/>
       <UniqueServices/>
       <OurCustomers/>
       <Testimonials/>
       <OurServices/>
    </>
  )
}

export default Home