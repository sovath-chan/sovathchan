import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeFooter from '../component/Home/HomeFooter'
import AboutBody from '../component/About/AboutBody'
import HomeCart from '../component/Home/HomeCart'

const About = () => {

      const [showCart, setShowCart] = useState(false);
  


  return (
    <div>
    <HomeHeader setShowCart={setShowCart}/>
    {showCart && <HomeCart setShowCart={setShowCart} />}
    <AboutBody/>
    <HomeFooter/>
    </div>
  )
}

export default About
