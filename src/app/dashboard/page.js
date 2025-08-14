import React from 'react'
import Image from "next/image"
// import { useRouter } from 'next/navigation';

const Page = () => {

    // const router = useRouter();

    return (
        <div className='text-center'>
            Dashboard works!
            <Image alt="Dashbard logo" className='' src={"/vercel.svg"} width={50} height={50} />
            {/* <button onClick={() => router.push('/landingpage')}>Go to Navbar</button>/ */}
        </div>
    )
}

export default Page
