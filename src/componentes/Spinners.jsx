import React from 'react';
import {FaSpinner} from 'react-icons/fa';
import '../css-componentes/Spinners.css';

const Spinners = () => {
    return (
        <div className='caja_spinners'>
            <FaSpinner className='spinners' size={50}/> 
        </div>
    );
}

export default Spinners;
