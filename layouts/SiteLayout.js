import React from 'react'
import Head from "next/Head"
import Button from "../components/Button"
import NavLink from "../components/NavLink"

const SiteLayout = ({ children, title }) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        <div className="bg-purple-500 p-2 shadow-md mb-14">
            <div className="container mx-auto flex items-center justify-between text-white">
                <h1 className="text-lg font-bold">Next Demo!</h1>
                <nav>
                    <ul>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/blogs">Blogs</NavLink>
                        <NavLink href="/account">Account area</NavLink>

                        <Button>
                            <a href="https://www.freecodecamp.org/news/the-next-js-handbook/" target="_blank"> 
                                NextJS Handbook
                            </a>
                        </Button>
                    </ul>
                </nav>
            </div>
        </div>

        <div className="container mx-auto">
            <h1 className="mt-4 text-5xl text-center">{title}</h1>

            <div className="container mt-12 p-4 max-w-4xl mx-auto">
                {children}
            </div>
        </div>
    </>
)

export default SiteLayout