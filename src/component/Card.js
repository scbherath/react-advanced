import React, { useState } from 'react';
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.css';

//thumb, name, category,price, body, weight, brand, color, more
const Card = ({id, name, email, location, zipcode, postalCode}) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return ( 
            <div className='col-md-12'>
                <div className="card border border-success shadow-0 mb-3" >
                <div className="card-header bg-transparent border-success">{name}</div>
                <div className="card-body text-success">
                    <p className="card-text">{email}</p>
                    <div style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row-reverse'}}> 
                            <Button type='primary' onClick={handleVisibility} > { isVisible?'Less':'View More' }</Button>
                        </div>
                    {
                    isVisible?                    
                        <div className="card-body" >  
                            <p>Location : {location} </p>   
                            <p>Zipcode : {zipcode} </p>   
                            <p>PostalCode : {postalCode} </p>   
                        </div>
                    : null
                    }     
                </div>
                
                <div className="card-footer bg-transparent border-success " style={{ alignItems:'center'}}>
                    <Button type='success' > Edit</Button>  {' '}  
                    <Button type='danger' > Delete</Button>  {' '}    
                    <Button type='warning' > View</Button>    
                </div>
            </div>
              
            <p></p>
            </div>
    );
};

export default Card;