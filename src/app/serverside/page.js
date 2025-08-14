import React from 'react'

const Page = async () => {
    // Fetch the joke from the api
    const res = await fetch('https://api.chucknorris.io/jokes/random', { cache: 'no-store' })
    // convert the response from json to a javascript object
    const joke = await res.json()
    return (
        <div>
            <h1 className='text-center'>Random jokes</h1>
            <p className='text-center text-5xl text-red-600'>{joke.value}</p>
        </div>
    )
}

export default Page
