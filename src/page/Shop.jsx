import React, {useState} from 'react'
import HomeHeader from '../component/Home/HomeHeader'
import HomeFooter from '../component/Home/HomeFooter'
import ShopProdcut from '../component/Shop/ShopProduct'
import HomeCart from '../component/Home/HomeCart'

const Shop = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <div>
        <HomeHeader setShowCart={setShowCart}/>
        <ShopProdcut/>
        {showCart && <HomeCart setShowCart={setShowCart} />}
    <HomeFooter/>
    </div>

  )
}

export default Shop
