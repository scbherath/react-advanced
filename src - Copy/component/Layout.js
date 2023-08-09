import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// import Spinner from './Spinner';

const Layout = ({size, children}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className={`col-md-${size} offset-md-2`}>
                    <div className='text-center'>
                        <div className='card'>
                            <div className='card-body'>
                                {children}                                
                            </div>
                        </div>                       
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Layout;