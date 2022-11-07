import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'


const Hero = () => {

    const transition = {duration: 3, type: 'spring'}

    return (
        <div className="hero-container">

            {/* left side */}

            <div className="h-sides">
                <span className='text1'>Facial Skin Care Products</span>

                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Display text for product description. Test text let's see.</span>
                </div>
            </div>

            {/* middle */}

            <div className="wrapper">
                {/* blue circle */}
                <motion.div 
                initial={{bottom: '2rem'}}
                whileInView={{bottom: '0rem'}}
                className="blueCircle"
                transition={transition}
            ></motion.div>

            {/* hero image */}
                <motion.img 
                    transition={transition}
                    initial={{bottom: '-2rem'}}
                    whileInView={{bottom: '0rem'}}
                    src={HeroImg} 
                    alt="" 
                    width={600} 
                />

                <motion.div 
                    transition={transition}
                    initial={{right: '4%'}}
                    whileInView={{right: '2%'}}
                    className="cart2"
                >
                    <RiShoppingBagFill />

                    <div className="signup">
                        <span>Best Sign Up Offers</span>

                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>

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