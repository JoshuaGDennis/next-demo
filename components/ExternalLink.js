import React from 'react'

const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" className="text-purple-500 font-bold hover:underline">
        {children}
    </a>
)

export default ExternalLink