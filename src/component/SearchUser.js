import React, { useState } from 'react';
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.css';
import InputWithLabel from './InputWithLabel';

const SearchUser = ({searchText}) => {

    return ( 
        <>
            <div className='card' >
                <div className="card-body">
                    <div className='row'>
                        <InputWithLabel placeholder="Search User"  ></InputWithLabel>           
                    </div>
                </div>
            </div> 
            <p></p>      
        </>
    );
};

export default SearchUser;