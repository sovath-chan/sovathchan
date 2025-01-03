import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeFooter from '../component/Home/HomeFooter'
import ContactBanner from '../component/Contact/ContactBanner'
import HomeCart from '../component/Home/HomeCart'

const Contact = () => {

    const [showCart, setShowCart] = useState(false);
  

  return (

    <div>
    <HomeHeader setShowCart={setShowCart}/>
    {showCart && <HomeCart setShowCart={setShowCart} />}
    <ContactBanner/>
    <HomeFooter/>
    </div>
    
  )
}

export default Contact
