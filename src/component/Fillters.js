import React, { useState } from 'react';
import Button from './Button'

const Fillters = ({ data, filterDispatch }) => {

    //const [selectedCategory, setSelectedCategory] = useState(null);

    //console.log('categoryFilter categoryFilter',categoryFilter);

    // const handleFilter = (category) => {
    //     setSelectedCategory(category)
    //     console.log('filter');
    //     console.log('handleFilter',category);
    // }

    //categoryFilter('simple')

    const handleClear = () => {
        filterDispatch({ type: 'SET_CLEAR_FILTER', payload: {"initialData":data, "category":'SET_CLEAR_FILTER'} })

        //console.log(' SET_CLEAR_FILTER');
    }

    const handleSelectCategory=(category)=>{        
        //console.log('handleSelectCategory data ');
        filterDispatch({ type: 'SET_FILTER_CATEGORY', payload: {"initialData":data,"category":category} })
    }

    return (<div className='row'>
        <div className='col-md-12 text-center'>
        {/* onChange={e => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })} */}

            <Button type='success' onClick={ () => handleSelectCategory('simple')  } > Simple  </Button> {' '}
            <Button type='success' onClick={ () => handleSelectCategory('luxurey') } > Luxurey </Button> {' '}
            <Button type='success' onClick={ () => handleSelectCategory('rugged')  } > Rugged  </Button> {' '}
            <Button type='warning' onClick={ () => handleClear()   } > Clear Fillter </Button>
        </div>
        <p></p>
    </div>);
};

export default Fillters;