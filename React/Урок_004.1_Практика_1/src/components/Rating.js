import React from 'react';
import './Rating.css'

const Rating = ({rate}) => {
    return (
        <div className='rateStyle'>
            <div className='borderStyle'>
                {rate}<sup style={{fontSize: '7px'}}>%</sup>
                <div className='borderRateStyle'>
                </div>
            </div>
        </div>
    )
}

export default Rating
