import React from 'react'
import './Testimonials.css'
import Hero from '../../assets/testimonialHero.png'
import {TestimonialsData} from '../../data/testimonials'

import {Swiper, SwiperSlide} from 'swiper/react'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="t-wrapper">
                <div className="t-container">
                    <span>Top Rated</span>
                    <span>
                        Filler text for this span. Filler text for this span and even more filler text for this span.
                    </span>
                </div>

                <img src={Hero} alt="" />

                <div className="t-container">
                    <span>100k</span>
                    <span>Happy Customers With Us</span>
                </div>
            </div>

            <div className="reviews">Reviews</div>

            <div className="t-carousel">
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className='ts-Carousel'
                >
                    {
                        TestimonialsData.map((testimonial, i)=> (
                            <SwiperSlide>
                                <div className="testimonial">
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonials