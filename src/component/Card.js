import React, { useState } from 'react';
import Image from './Image';
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.css';

//thumb, name, category,price, body, weight, brand, color, more
const Card = ({id, thumb, category, name, price, body, weight, brand, color}) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return ( 
            <div className='col-md-6'>
                <div className="card" >                
                    {/* <Image src={thumb} width="200px"  />                */}
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} >
                            <span> {category}</span>
                            <span>{price}</span>
                        </div>
                        <div style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row-reverse'}}> 
                            <Button type='primary' onClick={handleVisibility} > { isVisible?'Less':'View More' }</Button>
                        </div>
                    </div>                    
                    {
                        isVisible?                    
                            <div className="card-body" >  
                                <p>{body}</p>
                                <p> weight : {weight}</p>
                                <p>brand : {brand}</p>
                                <p>color : {color}</p>                        
                            </div>
                        : null
                    }
                    
                </div>
                <p></p>
            </div>

    );
};

export default Card;