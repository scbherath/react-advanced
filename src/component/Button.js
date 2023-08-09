import React from 'react';

const Button = ({type, disabled, children, onClick}) => {
    return (
        <button 
            className={`btn btn-${type} btn-sm` }
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;