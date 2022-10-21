import React from 'react'
import './Virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Visual = () => {
    return (
        <div className='virtual'>
            <div className="virtual-left">
                <span>Virtual Try-On</span>
                <span>Never Buy the Wrong Shade Again!</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />
            </div>

            <div className="virtual-right">
                <div className="virtual-wrapper">
                    <ReactCompareImage 
                        leftImage={Before}
                        rightImage={After}
                    />
                </div>
            </div>

        </div>
    )
}

export default Visual