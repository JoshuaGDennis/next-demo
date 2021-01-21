import React from 'react'
import Link from "next/Link"
import Head from "next/Head"
import Button from "../components/Button"

const NotFoundLayout = () => (
    <div className="bg-purple-400 h-screen text-center flex flex-column justify-center">
        <Head>
            <title>404 - Not found!</title>
        </Head>

        <div className="my-auto">
            <h1 className="text-8xl text-white">404 - Not found</h1>
                <Link href="/">
                    <a>
                        <Button className="mt-4">
                            Back to safety!
                        </Button>
                    </a>
                </Link>
        </div>
    </div>
)

export default NotFoundLayout