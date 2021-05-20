import React from 'react';
import './Rating.css'


const Rating = ({rate}) => {


    const calcRate25 = () => {
        return (
            <div className='borderStyle25'>
                <div className='lineaStyle25'>
                    <div className='borderRateStyle'>
                        {rate}<sup style={{fontSize: '7px'}}>%</sup>
                    </div>
                </div>
            </div>
        )
    }

    const calcRate50 = () => {
        return (
            <div className='borderStyle50'>
                <div className='lineaStyle50'>
                    <div className='borderRateStyle'>
                        {rate}<sup style={{fontSize: '7px'}}>%</sup>
                    </div>
                </div>
            </div>
        )
    }

    const calcRate75 = () => {
        return (
            <div className='borderStyle75'>
                <div className='lineaStyle75'>
                    <div className='borderRateStyle'>
                        {rate}<sup style={{fontSize: '7px'}}>%</sup>
                    </div>
                </div>
            </div>
        )
    }

    const calcRate100 = () => {
        return (
            <div className='borderStyle75'>
                <div className='lineaStyle100'>
                    <div className='borderRateStyle'>
                        {rate}<sup style={{fontSize: '7px'}}>%</sup>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='rateStyle'>
            {rate <= 50 ? calcRate25() : rate <= 65 ? calcRate50() : rate <= 85 ? calcRate75() : calcRate100()}
        </div>
    )
}

export default Rating;
