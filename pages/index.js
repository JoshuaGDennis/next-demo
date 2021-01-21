import React from 'react'
import Image from 'next/Image'
import ExternalLink from "../components/ExternalLink"

const Homepage = () => (
    <>
        <div className="w-max rounded overflow-hidden mb-2 mx-auto" style={{ height: "300px" }}>
            <Image src="/images/sample.jpg" alt="Sample Image" width="300" height="300" /> 
        </div>

        <p className="text-center mb-5">This is an image generated using <ExternalLink href="https://nextjs.org/docs/api-reference/next/image">next/Image</ExternalLink></p>

        <div className="p-4 shadow-md rounded bg-white">
            <p>This is a low level demo of a Next application! You can see the documentation for Next <ExternalLink href="https://nextjs.org/docs/getting-started">here!</ExternalLink></p>

            <h2>Basic features</h2>
            <ul className="list-disc">
                <li className="ml-5">Automatic routing using the /pages directory</li>
                <li className="ml-5">Single file components using built in styled-jsx</li>
                <li className="ml-5">Image optimization using next/Image</li>
                <li className="ml-5">Dynamic manipulation of HTML header tags using next/Head</li> 
            </ul>
        </div>
    </>
)

Homepage.getInitialProps = () => ({ pageTitle: 'Homepage' })

export default Homepage