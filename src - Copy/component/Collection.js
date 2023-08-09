import React, { useContext } from 'react';

import Card from './Card';

import Spinner from './Spinner/Spinner';


import { VehicleContext } from '../context/VehicleContext';

const DataViewer = ({data}) => {

    //const { useFetch } = useContext(VehicleContext)
    //const [loading, result, error] = useFetch('/vans')
    //console.log('data',data);
   // const data = result ? result : null

    //error and loading effet use is valid ????
    //if(error) return <div>{error}</div>

    return (
            <div className='row'>     
            {/* {loading?<Spinner/>:null}                         */}
            {
                data?
                data.map((van) => (                    
                    <Card key={van.id} {...van} />
                ))
                :<div><b>No data available</b></div> 
            } 
            </div>
    );
};

export default DataViewer;
