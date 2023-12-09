import React from 'react';
import './chip.css';

function Chip({ label }) {
    return (
        <p className='chip'>
            {label}
        </p>
    );
};

export default Chip;