import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeFooter from '../component/Home/HomeFooter'
import Body from '../component/Blog/Body'
import HomeCart from '../component/Home/HomeCart'

const Blog = () => {

    const [showCart, setShowCart] = useState(false);
  
  return (
    <div>
    <HomeHeader setShowCart={setShowCart}/>
    {showCart && <HomeCart setShowCart={setShowCart} />}
    <Body/>
    <HomeFooter/>
    </div>
    
  )
}

export default Blog
