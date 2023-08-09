import React, { useState, useEffect } from 'react'

import httpClient from './utils/httpClient'



const useFetch = url => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        const fetchApiData =  async () => {
            try{
                const { data } = await httpClient.get (url)
                setResult(data)
            }catch (error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchApiData()
    },[url])
    return [loading, result, error]
}

const App = () => {
    const [loading, result, error] = useFetch('/planets')

    if(loading) return <div>loading...</div>
    if(error) return <div>{error}</div>
    const data = result ? result : null
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
};

export default App;