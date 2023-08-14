// import React, { createContext, useState, useEffect, useReducer } from 'react';

// import httpClient from '../utils/httpClient';

// export const VehicleContext = createContext();

// const VehicleContextProvider = ( {children} ) => {

//     const initialState = {
//         loading:true,
//         result: null,
//         error: null    
//     }
    
//     //action types
//     const SET_LOADING = 'SET_LOADING';
//     const SET_RESPONSE_RESULT = 'SET_RESPONSE_RESULT';
//     const SET_RESPONSE_ERROR = 'SET_RESPONSE_ERROR';

//     //action types for filtering
//     const SET_ = 'SET_LOADING';
    
//     const fetchReducer = (state, action) => {
//         const { type } = action;
//         console.log(state);
//         switch (type){
//             case SET_LOADING :
//                 return {
//                     loading: true,
//                     result: null,
//                     error: null
//                 }
//             case SET_RESPONSE_RESULT :
//                 return {
//                     result: action.payload.response,
//                     loading: false,
//                     error: null
//                 }
//             case SET_RESPONSE_ERROR :
//                 return {
//                     error: action.payload.error,
//                     loading: false,
//                     result: null,
//                 } 
//             default:
//                 return state
//         }
//     }
    
//     const useFetch = url => {
    
//         const [state, dispatch] = useReducer(fetchReducer, initialState);
    
//         useEffect(()=>{
//             //console.log('url',url);
//             dispatch({type: SET_LOADING})
//             const fetchApiData =  async () => {
//                 try{
//                     const { data } = await httpClient.get(url);
//                     dispatch({type: SET_RESPONSE_RESULT, payload: { response: data }});
//                 }catch (error){
//                     dispatch({type: SET_RESPONSE_ERROR, payload: { error: error.message }})
//                 }       
//             }
//             fetchApiData()
//         },[url])
//         return [state.loading, state.result, state.error]
//     }

//     const contextValue = {
//         useFetch
//     };

//     return (
//         <VehicleContext.Provider value={contextValue} > {children} </VehicleContext.Provider>
//     );
    
// };

// export default VehicleContextProvider;