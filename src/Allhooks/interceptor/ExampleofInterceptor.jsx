import axios from 'axios'
import React, { useEffect } from 'react'

function ExampleofInterceptor() {
    useEffect(
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {


            })
            .catch(err => {
                console.log(err)
            })
    )
    axios.interceptors.request.use((config) => {
        Object.assign(config.headers, { Test: 'Sai' })
        console.log(config)
        return config;
    }, (error) => {
        return Promise.reject(error)
    }
    );
    axios.interceptors.response.use(
        (config) => {
            Object.assign(config.headers, { Test: 'Sai' })
            console.log(config)
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return (
        <div></div>
    )
}

export default ExampleofInterceptor