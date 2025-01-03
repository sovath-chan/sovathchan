import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeFooter from '../component/Home/HomeFooter'
import ShipingCard from '../component/Features/ShipingCard'
import Breadcrumb from '../component/Features/Breadcrumb'
import HomeCart from '../component/Home/HomeCart'
const Features = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <div>
    <HomeHeader setShowCart={setShowCart}/>
        {showCart && <HomeCart setShowCart={setShowCart} />}
    <Breadcrumb/>
    <ShipingCard/>
    <HomeFooter/>
    </div>
    

  )
}

export default Features
