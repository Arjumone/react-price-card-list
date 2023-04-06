import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
    const {} = price
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
            <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl font-bold text-white'>/month</span>
            </h2>
            
            <h5 className='text-2xl font-bold text-center my-5'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features:</p>
            {
                price.features.map((feature,idx) =><Features key={idx} feature={feature}></Features>)
            }
            <button className='w-full mt-auto hover:bg-green-700 bg-green-500 py-2 rounded-md text-w
             font-bold'>Buy now</button>
        </div>
    );
};

export default PriceCard;