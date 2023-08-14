import React, { useState } from 'react';
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.css';
import InputWithLabel from './InputWithLabel';

//thumb, name, category,price, body, weight, brand, color, more
const NewUser = ({id, name, email, location, zipcode, postalCode}) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return ( 
        <div>            
            
            <div className="d-flex justify-content-between align-items-center">
                <p></p>
                <div>
                    <button className='btn btn-info ' onClick={()=>handleVisibility() } > New User</button>
                </div>
            </div>
            <p></p>

                
                        
                    {
                    isVisible?
                    <div className='card' >
                        <div className="card-body">
                            <div><h3>Add New User</h3></div>
                            <form>
                                <div className='col-md-12'>
                                    <div className='row text-start'>                    
                                        <InputWithLabel label="Name" ></InputWithLabel>
                                        <InputWithLabel label="Email" ></InputWithLabel>
                                        <InputWithLabel label="Location" ></InputWithLabel>
                                        <InputWithLabel label="Zipcode" ></InputWithLabel>
                                        <InputWithLabel label="PostalCode" ></InputWithLabel>
                                    </div>
                                    
                                    <p></p>
                                    <Button type='success' onClick={handleVisibility} > Save User</Button>     
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    :null}
                    <br></br>
                </div>
            
        
    );
};

export default NewUser;