import React from 'react';

const InputWithLabel = ({label, placeholder, value, name, onChange}) => {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input 
                className="form-control"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    );
}

export default InputWithLabel;