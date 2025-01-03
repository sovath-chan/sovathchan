import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeCart from '../component/Home/HomeCart'
import HomeBanner from '../component/Home/HomeBanner'
import HomeSlider from '../component/Home/HomeSlider'
import HomeProduct from '../component/Home/HomeProduct'
import HomeFooter from '../component/Home/HomeFooter'

const Home = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <HomeHeader setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <HomeSlider/>
      <HomeBanner/>
      <HomeProduct/>
      <HomeFooter/>
    </div>
  )
}

export default Home
