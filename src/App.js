import React, { useEffect, useReducer, useState } from 'react'

import httpClient from './utils/httpClient'
import Collection from './component/Collection';
import Layout from './component/Layout';
import Heading from './component/Heading';
import Fillters from './component/Fillters';

import Spinner from './component/Spinner';
import VehicleContextProvider from './context/VehicleContext';

import {
        SET_LOADING, 
        SET_RESPONSE_RESULT,
        SET_RESPONSE_ERROR,
        SET_FILTER_CATEGORY,
        SET_CLEAR_FILTER
    } from './utils/actionsTypes'

const initialState = {
    loading:true,
    result: null,
    error: null    
}



// //action types
// const SET_LOADING = 'SET_LOADING';
// const SET_RESPONSE_RESULT = 'SET_RESPONSE_RESULT';
// const SET_RESPONSE_ERROR = 'SET_RESPONSE_ERROR';

// //filter actions
// const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY'
// const SET_CLEAR_FILTER = 'SET_CLEAR_FILTER'

//const [myRes, setMyRes] = useState('')


const fetchReducer = (state, action) => {
    const { type } = action;
    console.log('fetchReducer',type);
    switch (type){
        case SET_LOADING :
            return {
                loading: true,
                result: null,
                error: null
            }
        case SET_RESPONSE_RESULT :
            return {
                result: action.payload.response,
                loading: false,
                error: null
            }
        case SET_RESPONSE_ERROR :
            return {
                error: action.payload.error,
                loading: false,
                result: null,
            } 
        default:
            return state
    }
}

const filterReducer = (state, action) => {
    //console.log('filterReducer action',action);
    console.log('filterReducer result',action);
    const { type } = action
    switch (type){       
        case SET_FILTER_CATEGORY : 
            const {initialData, category} = action.payload
            const filteredResult = initialData.filter(v=> v.category === category)            
            return {
                selectedCategory: action.payload.category,
                filteredResult : filteredResult
            }
        case SET_CLEAR_FILTER : 
            //console.log('filterReducer SET_CLEAR_FILTER ');
            return {
                selectedCategory:action.payload.category,
                initialData:action.payload.initialData
            }
        default :
            return state
    }
}


const useFetch = url => {

    const [state, dispatch] = useReducer(fetchReducer, initialState)
    console.log('useFetch',state)
    useEffect(() => {
        //console.log('url',url);
        dispatch({type: SET_LOADING})
        const fetchApiData = async () => {
            try{
                const { data } = await httpClient.get(url);
                dispatch({type: SET_RESPONSE_RESULT, payload: { response: data }})
            }catch (error){
                dispatch({type: SET_RESPONSE_ERROR, payload: { error: error.message }})
            }       
        }
        fetchApiData()
    },[url])
    return [state.loading, state.result, state.error]
}

function categoryFilter(category) {
    //console.log('categoryFilter in app ',category);
}

const App = () => {
    const [loading, result, error] = useFetch('/vans')
    const filterState = {
        data: result || [],
        filteredResult : null,
        selectedCategory : null
    }
  
    const [state, filterDispatch] = useReducer(filterReducer, filterState);
   
    console.log('app state loading ',SET_LOADING)

    if(error) return <div>{error}</div>

    const filteredResult = state.selectedCategory==null||(state.selectedCategory===SET_CLEAR_FILTER)?result: state.filteredResult
   
    const heading ={
        'title':'Explore Our Van Options',
    }
    return (        
        <Layout size="6">     
            <Heading {...heading}/>       
                <Fillters data={result} filterDispatch={filterDispatch} />
                {loading?<Spinner/>:''}
                <Collection
                    data={filteredResult}
                 />            
        </Layout>
    )

};

export default App;