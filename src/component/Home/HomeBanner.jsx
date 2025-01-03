import React from 'react'
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner-01.jpg';
import banner2 from '../../images/banner-02.jpg';
import banner4 from '../../images/banner4.png';

const HomeBanner = () => {
  return (
<div class="sec-banner bg0 p-t-80 p-b-50">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                <div class="block1 wrap-pic-w">
                    <img src={banner1} alt="IMG-BANNER"/>

                    <Link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div class="block1-txt-child1 flex-col-l">
                            <span class="block1-name ltext-102 trans-04 p-b-8">
                                Women
                            </span>

                            <span class="block1-info stext-102 trans-04">
                                Spring 2025
                            </span>
                        </div>

                        <div class="block1-txt-child2 p-b-4 trans-05">
                            <div class="block1-link stext-101 cl0 trans-09">
                                Shop Now
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                <div class="block1 wrap-pic-w">
                    <img src={banner2} alt="IMG-BANNER"/>
                    <Link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div class="block1-txt-child1 flex-col-l">
                            <span class="block1-name ltext-102 trans-04 p-b-8">
                                Men
                            </span>

                            <span class="block1-info stext-102 trans-04">
                                Spring 2025
                            </span>
                        </div>

                        <div class="block1-txt-child2 p-b-4 trans-05">
                            <div class="block1-link stext-101 cl0 trans-09">
                                Shop Now
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto" >
                <div class="block1 wrap-pic-w">
                    <img src={banner4} alt="IMG-BANNER" style={{height: '280px', width: '400px'}}/>

                    <Link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div class="block1-txt-child1 flex-col-l">
                            <span class="block1-name ltext-102 trans-04 p-b-8">
                                Jewelery
                            </span>

                            <span class="block1-info stext-102 trans-04">
                               Spring 2025
                            </span>
                        </div>

                        <div class="block1-txt-child2 p-b-4 trans-05">
                            <div class="block1-link stext-101 cl0 trans-09">
                                Shop Now
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HomeBanner
