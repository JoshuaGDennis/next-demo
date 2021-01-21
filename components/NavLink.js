import React from 'react'
import Link from "next/Link"
import { useRouter } from "next/router"

const NavLink = ({ href, children }) => {
    const router = useRouter()

    return (
        <li>
            <Link href={href}>{children}</Link>

            <style jsx>{`
                li {
                    margin: 1rem 2rem;
                    display: inline-block;
                    font-weight: ${router.pathname === href ? 'bold' : 'normal'};
                }

                li:hover {
                    text-decoration: underline;
                }
            `}</style>
        </li>
    )
}

export default NavLink