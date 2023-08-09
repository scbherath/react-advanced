import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://swapi.dev/api',
    header: {
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default httpClient
