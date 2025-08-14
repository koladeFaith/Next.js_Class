'use client'
import { useEffect, useState } from 'react';
const Page = () => {

    const [joke, setJoke] = useState('');

    useEffect(() => {
        async function fetchJoke() {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const data = await res.json();
            setJoke(data.value)
        }
        fetchJoke();
    }, []);

    return (
        <div className=' '>
            <h1 className='text-center'>Random jokes</h1>
            <p className='text-center text-5xl text-red-600'>{joke}</p>
        </div>
    )
}

export default Page
