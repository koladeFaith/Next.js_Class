import React from 'react'
import Image from "next/image"
const page = () => {
    return (
        <div className='text-center'>
            Dashboard works!
            <Image alt="Dashbard logo" className='-red-900' src={"/vercel.svg"} width={50} height={50} />
        </div>
    )
}

export default page
