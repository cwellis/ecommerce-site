import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'


const Hero = () => {
    return (
        <div className="hero-container">

            {/* left side */}

            <div className="h-sides">
                <span className='text1'>Skin Cream</span>

                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Display text for product description. Test text let's see.</span>
                </div>
            </div>

            {/* middle */}

            <div className="wrapper">
                <div className="blueCircle"></div>
                <img src={HeroImg} alt="" width={600} />
                <div className="cart2">
                    <RiShoppingBagFill />

                    <div className="signup">
                        <span>Best Sign Up Offers</span>

                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}

            <div className="h-sides">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Monthy Traffic</span>
                </div>

                <div className="customers">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero