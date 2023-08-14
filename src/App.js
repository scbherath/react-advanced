import React, { useEffect, useReducer, useState } from 'react'

import Layout from './component/Layout';
import Heading from './component/Heading';

import Spinner from './component/Spinner';
import Collection from './component/Collection';
import SearchUser from './component/SearchUser';
import NewUser from './component/NewUser';

const App = () => {
    const users = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          location: "Cityville",
          zipcode: "12345",
          postalCode: "P123"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          location: "Townsville",
          zipcode: "67890",
          postalCode: "T456"
        }
      ];
    
    const heading ={
        'title':'User Management',
    }
    return (        
        <Layout size="6">     
            <Heading {...heading}/>   
            <SearchUser/>
            <NewUser/>

            <Collection users={users}/>
        </Layout>
    )

};

export default App;