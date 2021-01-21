import React from 'react'
import Link from "next/Link"
import posts from "./posts.json"

const BlogPost = ({ post }) => (
    <>
        <Link href="/blogs">
            <a className="block mb-4 text-purple-500 font-bold">Back to blogs</a>
        </Link>
        <div className="p-4 shadow-md rounded bg-white">
            <p>{post.content}</p>
        </div>
    </>
)

BlogPost.getInitialProps = ({ query }) => ({ 
    post: posts[query.id],
    pageTitle: posts[query.id].title
})

export default BlogPost