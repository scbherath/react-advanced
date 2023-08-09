import React, { useEffect, useReducer } from 'react'

import httpClient from './utils/httpClient'
import Collection from './component/Collection';
import Layout from './component/Layout';
import Heading from './component/Heading';
import Fillters from './component/Fillters';

import Spinner from './component/Spinner';
import VehicleContextProvider from './context/VehicleContext';

const initialState = {
    loading:true,
    result: null,
    error: null    
}



//action types
const SET_LOADING = 'SET_LOADING';
const SET_RESPONSE_RESULT = 'SET_RESPONSE_RESULT';
const SET_RESPONSE_ERROR = 'SET_RESPONSE_ERROR';

//filter actions
const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY'
const SET_CLEAR_FILTER = 'SET_CLEAR_FILTER'

const fetchReducer = (state, action) => {
    const { type } = action;
    //console.log(action);
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
    //console.log('filterReducer state',state);
    const { type } = action
    switch (type){       
        case SET_FILTER_CATEGORY : 
            const {initialData, category} = action.payload
            const filteredResult = initialData.filter(v=> v.category === category)            
            //console.log('filteredResult initialData ',initialData);
            //console.log('filteredResult ',filteredResult.length);
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

    const [state, dispatch] = useReducer(fetchReducer, initialState);
    
    useEffect(()=>{
        //console.log('url',url);
        dispatch({type: SET_LOADING})
        const fetchApiData = async () => {
            try{
                const { data } = await httpClient.get(url);
                dispatch({type: SET_RESPONSE_RESULT, payload: { response: data }});
            }catch (error){
                dispatch({type: SET_RESPONSE_ERROR, payload: { error: error.message }})
            }       
        }
        fetchApiData()
    },[url])
    return [state.loading, state.result, state.error]
}

// const filterFetch = (data) => {
//     const [state, filterDispatch] = filterFetch(filterReducer, filterState);
//     console.log('filterFetch data',data);
//     console.log('filterFetch state',state);
// }


function categoryFilter(category) {
    //console.log('categoryFilter in app ',category);
}

// function categoryFilter = ({category}) => {
//     console.log('categoryFilter in app ',category);
// }

const App = () => {
    const [loading, result, error] = useFetch('/vans')
    const filterState = {
        data: result || [],
        filteredResult : null,
        selectedCategory : null
    }
    //console.log('app filterState',filterState)

    //

    //

    const [state, filterDispatch] = useReducer(filterReducer, filterState);


    //console.log('app state',state)
    // useEffect(()=>{
    //     //console.log('useEffect')
    //     filterDispatch({ type: 'SET_DATA', payload: result })
    // },[result])
    
    console.log('app state',state.selectedCategory&&(state.selectedCategory==='SET_CLEAR_FILTER'))
    //const [filterResult] = filterFetch(result)


    //const [] = filterFetch(result)

    if(error) return <div>{error}</div>

    //const filteredResult = state.filteredResult&&state.filteredResult.length>0 ? state.filteredResult : result
    const filteredResult = state.selectedCategory==null||(state.selectedCategory==='SET_CLEAR_FILTER')?result: state.filteredResult

    

      if (state.selectedCategory == null) {
        console.log('Null or undefined value!');
      } 

   
    const heading ={
        'title':'Explore Our Van Options',
    }
    return (        
        <Layout size="6">            
            <Heading {...heading}/> 
            {/* <VehicleContextProvider>          */}
            {/* </VehicleContextProvider>   */}
                <Fillters data={result} filterDispatch={filterDispatch} />    
                {/* <Fillters  />     */}
                {loading?<Spinner/>:''}        
                <Collection 
                data={filteredResult}
                 />
            
        </Layout>
    )

};

export default App;