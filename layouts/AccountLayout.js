import React from 'react'
import Head from "next/Head"
import NavLink from "../components/NavLink"


const AccountLayout = ({ children, title }) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        <div className="bg-purple-500 p-2 shadow-md mb-14">
            <div className="container mx-auto flex items-center justify-between text-white">
                <h1 className="text-lg font-bold">My Account</h1>
                <nav>
                    <ul>
                        <NavLink href="/account/profile">My profile</NavLink>
                        <NavLink href="/account/settings">Account settings</NavLink>
                        <NavLink href="/">Back to site</NavLink>
                    </ul>
                </nav>
            </div>
        </div>

        <div className="container mx-auto">
            <h1 className="mt-4">{title}</h1>

            <div className="container mt-5 p-4 max-w-4xl">
                {children}
            </div>
        </div>
    </>
)

export default AccountLayout