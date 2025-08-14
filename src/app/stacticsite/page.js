import React from 'react'

const Page = async () => {
    // Fetch the joke from the api
    const res = await fetch('https://api.chucknorris.io/jokes/random', { next: { revalidate: 10000 } })
    // convert the response from json to a javascript object
    const fact = await res.json()
    return (
        <div>
            <h1 className='text-center'>Random Facts</h1>
            <p className='text-center text-5xl text-red-600'>{fact.value}</p>
        </div>
    )
}

export default Page
