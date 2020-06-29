import React from 'react';

import './input-field.styles.scss';


const InputField = ({handleChange, id, labelName, ...restOfProps}) => (
    <div className="input-group">
        <label className='input-label' htmlFor={id}>{labelName}</label>
        <input id={id} className='input-field'  {...restOfProps}/>
    </div>
);

export default InputField; 