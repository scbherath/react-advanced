import React from 'react';

const Image = ({src, name, width}) => {

    return (
        <div>
            <img 
                src={src} 
                alt={name}                
                width={width}
                style={{paddingTop:'10px'}}
            />
        </div>
    );
}
    
export default Image;
