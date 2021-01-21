import React from 'react'
import Link from "next/Link"
import posts from "./posts.json"

const Blog = () => (
    <ul className="text-center">
        {Object.entries(posts).map((value, index)=> (
            <Link href="/blogs/[id]" as={`/blogs/${value[0]}`} key={index}>
                <a>
                    <div className="transition inline-block bg-white rounded shadow-md hover:shadow-lg p-4 mx-4">
                        {`${value[1].title.charAt(0).toUpperCase()}${value[1].title.slice(1)}`}
                    </div>
                </a>
            </Link>
        ))}
    </ul>
)

export default Blog