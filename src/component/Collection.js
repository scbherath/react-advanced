import React, { useContext } from 'react';

import Card from './Card';

import Spinner from './Spinner/Spinner';

const Collection = ({users}) => {

    return (
            <div className='row'>     
            {/* {loading?<Spinner/>:null}                         */}
            {
                users?
                users.map((user) => (                    
                    <Card key={user.id} {...user} />
                ))
                :<div><b>No data available</b></div> 
            } 
            </div>
    );
};

export default Collection;
