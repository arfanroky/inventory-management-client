import React from 'react';

const InputField = ({type, placeholder, setInputValue }) => {
    return (
        <div>
            <input onClick={(e) => setInputValue(e.target.value)} type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputField;