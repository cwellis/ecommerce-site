import React from 'react'
import Logo from '../../assets/logo.png'
import './Footer.css'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className='cFooterWrapper'>
            <hr />

            <div className="cFooter">
                <div className="clogo">
                    <img src={Logo} alt="" />
                    <span>eCommerce</span>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Contact Us</span>
                        <span className="pngLine">
                            <LocationMarkerIcon className='icon' />
                            <span>111 North Ave Orlando, FL 12345</span>
                        </span>

                        <span className="pngLine">
                            {" "}
                            <PhoneIcon className='icon' />
                            <a href="">352-306-4415</a>
                        </span>

                        <span className='pngLine'>
                            <InboxIcon className='icon' />
                            <a href="">support@ecommerce.com</a>
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Account</span>
                        <span className="pngLine">
                            <LoginIcon className='icon' />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Company</span>
                        <span className="pngLine">
                            <UsersIcon className='icon' />
                            <a href="/about">
                                <p>About Us</p>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Resources</span>
                        <span className="pngLine">
                            <LinkIcon className='icon' />
                                <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <span>Copyright 2022 by eCommerce, inc.</span>
                <span>All rights reserved.</span>
            </div>

        </div>
    )
}

export default Footer