import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div>
            <CheckCircleIcon className='h-4 w-4 items-center text-purple-500'/>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Features;